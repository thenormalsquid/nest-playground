import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinTable, ManyToMany } from 'typeorm';
import { Company } from './company.entity';
import { Flavor } from './flavor.entity';

export type Category = 'daiginjo' | 'ginjo' | 'nigori' | 'junmai' | 'honjozo';

@Entity()
export class Sake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: Category;

  @ManyToOne(() => Company, (company) => company.sake, { cascade: true })
  company: Company;

  @Column()
  alcohol: string;

  @Column()
  region: string;

  @Column({ default: 0})
  recommendations: number;

  @JoinTable()
  @ManyToMany(type => Flavor, flavor => flavor.sake, { cascade: true })
  flavors?: Flavor[];
}
