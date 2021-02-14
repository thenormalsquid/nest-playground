import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Sake } from './sake.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Sake, (sake) => sake.company)
  sake: Sake[];
}
