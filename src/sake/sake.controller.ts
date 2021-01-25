import { Controller, Get } from '@nestjs/common';

@Controller('sakes')
export class SakeController {
  @Get('types')
  findAll() {
    return 'This action returns all sakes';
  }
}
