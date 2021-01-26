import { Injectable, NotFoundException } from '@nestjs/common';
import { Sake } from './entities/sake.entity';
@Injectable()
export class SakeService {
  private sakes: Sake[] = [
    {
      id: 1,
      name: `Otokoyama “Tokubetsu Junmai"`,
      company: 'Otokoyama',
      category: 'junmai',
      alcohol: '15.5%',
      region: 'Hokkaido Prefecture',
      flavors: ['plum', 'cherry']
    },
    {
      id: 2,
      name: `Bizen Maboroshi`,
      company: 'Muromachi',
      category: 'ginjo',
      alcohol: '15.0%',
      region: 'Okayama Prefecture',
      flavors: ['pear', 'sweet rice']
    },
    {
      id: 3,
      name: `Dassai "23"`,
      company: 'Asahi Shuzo Co. Ltd.',
      category: 'daiginjo',
      alcohol: '16.0%',
      region: 'Yamaguchi Prefecture',
      flavors: ['pear', 'fennel']
    },
  ];

  findall() {
    return this.sakes;
  }

  findOne(id: string) {
    const sake = this.sakes.find((sake) => sake.id.toString() === id);
    if (!sake) {
      throw new NotFoundException(`Sake ${id} not found`);
    }
    return sake;
  }

  create(createSakeDto: any) {
    this.sakes.push(createSakeDto);
  }

  update(id: string, updateSakeDto: any) {
    const sake = this.findOne(id);
    if (sake) {

    }
  }

  delete(id: string) {
    const sakeIndex = this.sakes.findIndex(sake => sake.id.toString() === id);
    if (sakeIndex >= 0) {
      this.sakes.splice(sakeIndex, 1);
    }
  }
}
