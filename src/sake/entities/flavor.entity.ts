import { Column, Entity, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';
import { Sake } from './sake.entity';

@Entity()
export class Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(type => Sake, sake => sake.flavors)
  sake: Sake[];
}
