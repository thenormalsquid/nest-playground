import { Module } from '@nestjs/common';
import { SakeController } from './sake.controller';
import { SakeService } from './sake.service';

@Module({ controllers: [SakeController], providers: [SakeService] })
export class SakeModule {}
