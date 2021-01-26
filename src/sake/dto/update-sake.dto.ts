import { PartialType } from '@nestjs/mapped-types';
import { CreateSakeDto } from './create-sake.dto';

export class UpdateSakeDto extends PartialType(CreateSakeDto) {
}
