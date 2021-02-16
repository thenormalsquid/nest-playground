import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Sake } from './entities/sake.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, In, Repository } from 'typeorm';
import { CreateSakeDto } from './dto/create-sake.dto';
import { SAKE_BRANDS } from './sake.constants';
import { Flavor } from './entities/flavor.entity';
import { Company } from './entities/company.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Event } from 'src/events/entities/event.entity';
@Injectable()
export class SakeService {
  constructor(
    @InjectRepository(Sake)
    private readonly sakeRepository: Repository<Sake>,

    @InjectRepository(Flavor)
    private readonly flavorRepository: Repository<Flavor>,

    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,

    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,

    private readonly connection: Connection,
    @Inject(SAKE_BRANDS) sakeBrands: string[],
  ) {
    console.log(sakeBrands);
  }
  // private sakes: Sake[] = [
  //   {
  //     id: 1,
  //     name: `Otokoyama “Tokubetsu Junmai"`,
  //     company: 'Otokoyama',
  //     category: 'junmai',
  //     alcohol: '15.5%',
  //     region: 'Hokkaido Prefecture',
  //     flavors: ['plum', 'cherry']
  //   },
  //   {
  //     id: 2,
  //     name: `Bizen Maboroshi`,
  //     company: 'Muromachi',
  //     category: 'ginjo',
  //     alcohol: '15.0%',
  //     region: 'Okayama Prefecture',
  //     flavors: ['pear', 'sweet rice']
  //   },
  //   {
  //     id: 3,
  //     name: `Dassai "23"`,
  //     company: 'Asahi Shuzo Co. Ltd.',
  //     category: 'daiginjo',
  //     alcohol: '16.0%',
  //     region: 'Yamaguchi Prefecture',
  //     flavors: ['pear', 'fennel']
  //   },
  // ];

  findall(paginationQuery: PaginationQueryDto) {
    const { limit, offset } = paginationQuery;

    return this.sakeRepository.find({
      relations: ['flavors', 'company'],
      skip: offset,
      take: limit,
    });
  }

  async findOne(id: string) {
    const sake = await this.sakeRepository.findOne(id, {
      relations: ['flavors', 'company'],
    });
    if (!sake) {
      throw new NotFoundException(`Sake ${id} not found`);
    }
    return sake;
  }

  async create(createSakeDto: CreateSakeDto) {
    const flavors = await Promise.all(createSakeDto.flavors.map(name => this.preloadFlavorByName(name)));
    const company = await this.preloadCompanyByName(createSakeDto.company);
    const sake = this.sakeRepository.create({ ...createSakeDto, flavors, company });
    return this.sakeRepository.save(sake);
  }

  async update(id: string, updateSakeDto: any) {
    const flavors = updateSakeDto.flavors && (await Promise.all(
      updateSakeDto.flavors.map(name => this.preloadFlavorByName(name))
    ));
    const company = updateSakeDto.company && await this.preloadCompanyByName(updateSakeDto.company);

    const sake = await this.sakeRepository.preload({
      id: +id,
      ...updateSakeDto,
      flavors,
      company
    });
    if (!sake) {
      throw new NotFoundException(`Sake ${id} not found.`);
    }
    return this.sakeRepository.save(sake);
  }

  async delete(id: string) {
    const sake = await this.findOne(id);
    return this.sakeRepository.remove(sake);
  }

  async preloadFlavorByName(name: string): Promise<Flavor> {
    const existingFlavor = await this.flavorRepository.findOne({ name });
    // find or create flavor
    if(existingFlavor) {
      return existingFlavor;
    }
    return this.flavorRepository.create({ name });
  }

  async preloadCompanyByName(name: string): Promise<Company> {
    const existingCompany = await this.companyRepository.findOne({ name });
    if (existingCompany) {
      return existingCompany;
    }
    return this.companyRepository.create({ name });
  }

  async recommendSake(sake: Sake) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect(); // establish conn
    await queryRunner.startTransaction();

    try {
      sake.recommendations++;

      const recommendEvent = new Event();
      recommendEvent.name = 'recommend_sake';
      recommendEvent.type = 'sake';
      recommendEvent.payload = { sakeId: sake.id };

      await queryRunner.manager.save(sake);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch(err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }
}
