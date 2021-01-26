import { IsString } from 'class-validator';
import { Category } from '../entities/sake.entity';

export class CreateSakeDto {
  @IsString()
  readonly name: string;

  @IsString()
  readonly category: Category;

  @IsString()
  readonly company: string;

  @IsString()
  readonly alcohol: string;

  @IsString()
  readonly region: string;

  @IsString({ each: true })
  readonly flavors?: string[];
}
