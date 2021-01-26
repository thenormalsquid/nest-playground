import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeController } from './sake/sake.controller';
import { SakeService } from './sake/sake.service';

@Module({
  imports: [],
  controllers: [AppController, SakeController],
  providers: [AppService, SakeService],
})
export class AppModule {}
