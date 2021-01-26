import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeModule } from './sake/sake.module';

@Module({
  imports: [SakeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
