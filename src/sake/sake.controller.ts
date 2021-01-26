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
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.sakeService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.sakeService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.sakeService.delete(id);
  }
}
