import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeModule } from './sake/sake.module';

@Module({
  imports: [SakeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 6697,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
