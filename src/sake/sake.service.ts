import { Injectable, NotFoundException } from '@nestjs/common';
import { Sake } from './entities/sake.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSakeDto } from './dto/create-sake.dto';
@Injectable()
export class SakeService {
  constructor(
    @InjectRepository(Sake)
    private readonly sakeRepository: Repository<Sake>,
  ) {}
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

  findall() {
    return this.sakeRepository.find();
  }

  async findOne(id: string) {
    const sake = await this.sakeRepository.findOne(id);
    if (!sake) {
      throw new NotFoundException(`Sake ${id} not found`);
    }
    return sake;
  }

  create(createSakeDto: CreateSakeDto) {
    const sake = this.sakeRepository.create(createSakeDto);
    return this.sakeRepository.save(sake);
  }

  async update(id: string, updateSakeDto: any) {
    const sake = await this.sakeRepository.preload({ id: +id, ...updateSakeDto });
    if (!sake) {
      throw new NotFoundException(`Sake ${id} not found.`);
    }
    return this.sakeRepository.save(sake);
  }

  async delete(id: string) {
    const sake = await this.findOne(id);
    return this.sakeRepository.remove(sake);
  }
}
