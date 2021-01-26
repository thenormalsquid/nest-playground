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
import { CreateSakeDto } from './dto/create-sake.dto';
import { UpdateSakeDto } from './dto/update-sake.dto';
import { SakeService } from './sake.service';

@Controller('sakes')
export class SakeController {
  constructor(private readonly sakeService: SakeService) {

  }

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.sakeService.findall();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sakeService.findOne(id);
  }

  @Post()
  create(@Body() createSakeDto: CreateSakeDto) {
    return this.sakeService.create(createSakeDto);
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
