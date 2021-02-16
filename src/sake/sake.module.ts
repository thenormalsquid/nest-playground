import { Injectable, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SakeController } from './sake.controller';
import { SakeService } from './sake.service';
import { SAKE_BRANDS } from './sake.constants';

import { Sake } from './entities/sake.entity';
import { Company } from './entities/company.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from 'src/events/entities/event.entity';

export class MockSakeService {}
// class ConfigService {}
// class DevelopmentConfigService {}
// class ProductionConfigService {}
@Injectable()
class SakeBrandsFactory {
  create() {
    return ['foo', 'bar'];
  }
}
@Module({
  imports: [TypeOrmModule.forFeature([Sake, Flavor, Company, Event])],
  controllers: [SakeController],
  providers: [
    SakeService,
    SakeBrandsFactory,
    // {
    //   provide: ConfigService,
    //   useClass:
    //     process.env.NODE_ENV === 'development'
    //       ? DevelopmentConfigService
    //       : ProductionConfigService,
    // },
    {
      provide: SAKE_BRANDS,
      useFactory: (brandsFactory: SakeBrandsFactory) => brandsFactory.create(),
      inject: [SakeBrandsFactory],
    },
  ],
  exports: [SakeService],
})
export class SakeModule {}
