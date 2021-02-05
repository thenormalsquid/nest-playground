import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SakeController } from './sake.controller';
import { SakeService } from './sake.service';
import { Sake } from './entities/sake.entity';

@Module({ imports: [TypeOrmModule.forFeature([Sake])], controllers: [SakeController], providers: [SakeService] })
export class SakeModule {}
