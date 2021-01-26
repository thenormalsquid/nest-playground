import { Category } from '../entities/sake.entity';

export class UpdateSakeDto {
  readonly name?: string;
  readonly category?: Category;
  readonly company?: string;
  readonly alcohol?: string;
  readonly region?: string;
  readonly flavors?: string[];
}
