import { IsString } from 'class-validator';

import { Category } from '../entities/sake.entity';
import { Flavor } from '../entities/flavor.entity';
import { Company } from '../entities/company.entity';

export class CreateSakeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly category: Category;

  @IsString()
  readonly company: Company;

  @IsString()
  readonly alcohol: string;

  @IsString()
  readonly region: string;

  @IsString({ each: true })
  readonly flavors?: Flavor[];
}
