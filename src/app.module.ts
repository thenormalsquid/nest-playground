import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeModule } from './sake/sake.module';

const isDev = process.env.NODE_ENV === 'development';
@Module({
  imports: [SakeModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 6697,
    username: 'postgres',
    password: 'pass123',
    database: 'postgres',
    autoLoadEntities: true,
    synchronize: isDev
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
