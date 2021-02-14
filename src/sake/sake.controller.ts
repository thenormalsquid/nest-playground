import {
  Body,
  Controller,
  Get,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { CreateSakeDto } from './dto/create-sake.dto';
import { UpdateSakeDto } from './dto/update-sake.dto';
import { SakeService } from './sake.service';

@Controller('sakes')
export class SakeController {
  constructor(private readonly sakeService: SakeService) {

  }

  @Get()
  findAll(@Query() paginationQuery: PaginationQueryDto) {
    return this.sakeService.findall(paginationQuery);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sakeService.findOne(id);
  }

  @Post()
  create(@Body() createSakeDto: CreateSakeDto) {
    this.sakeService.create(createSakeDto);
    return createSakeDto;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSakeDto: UpdateSakeDto) {
    return this.sakeService.update(id, updateSakeDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sakeService.delete(id);
  }
}
