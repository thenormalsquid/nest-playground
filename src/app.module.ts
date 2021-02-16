import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from '../ormconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeModule } from './sake/sake.module';
import { SakeRatingModule } from './sake-rating/sake-rating.module';

@Module({
  imports: [
    SakeModule,
    TypeOrmModule.forRoot(connectionOptions),
    SakeRatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
