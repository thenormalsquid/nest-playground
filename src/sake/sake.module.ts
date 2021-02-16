import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SakeController } from './sake.controller';
import { SakeService } from './sake.service';

import { Sake } from './entities/sake.entity';
import { Company } from './entities/company.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';

export class MockSakeService {}
@Module({
  imports: [TypeOrmModule.forFeature([Sake, Flavor, Company, Event])],
  controllers: [SakeController],
  providers: [{ provide: SakeService, useValue: MockSakeService }],
  exports: [SakeService]
})
export class SakeModule {}
