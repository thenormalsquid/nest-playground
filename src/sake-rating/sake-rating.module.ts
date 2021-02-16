import { Module } from '@nestjs/common';
import { SakeModule } from 'src/sake/sake.module';
import { SakeRatingService } from './sake-rating.service';

@Module({
  imports: [SakeModule],
  providers: [SakeRatingService]
})
export class SakeRatingModule {}
