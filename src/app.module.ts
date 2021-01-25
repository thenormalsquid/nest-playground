import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeController } from './sake/sake.controller';

@Module({
  imports: [],
  controllers: [AppController, SakeController],
  providers: [AppService],
})
export class AppModule {}
