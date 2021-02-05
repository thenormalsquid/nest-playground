import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type Category = 'daiginjo' | 'ginjo' | 'nigori' | 'junmai' | 'honjozo';

@Entity()
export class Sake {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: Category;

  @Column()
  company: string;

  @Column()
  alcohol: string;

  @Column()
  region: string;

  @Column('json', { nullable: true })
  flavors?: string[];
}
