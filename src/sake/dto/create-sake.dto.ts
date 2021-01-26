import { Category } from '../entities/sake.entity';

export class CreateSakeDto {
  readonly name: string;
  readonly category: Category;
  readonly company: string;
  readonly alcohol: string;
  readonly region: string;
  readonly flavors?: string[];
}
