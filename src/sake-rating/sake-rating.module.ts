import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { SakeModule } from 'src/sake/sake.module';
import { SakeRatingService } from './sake-rating.service';

// use the database dynamic module
@Module({
  imports: [
    DatabaseModule.register({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      password: 'password',
    }),
    SakeModule,
  ],
  providers: [SakeRatingService],
})
export class SakeRatingModule {}
