import { DynamicModule, Module } from '@nestjs/common';
import { ConnectionOptions, createConnection } from 'typeorm';

// consuming modules will pass in the options that they need
@Module({})
export class DatabaseModule {
  static register(options: ConnectionOptions): DynamicModule {
    return {
      module: DatabaseModule,
      providers: [
        {
          provide: 'CONNECTION',
          useValue: createConnection(options)
        }
      ]
    }
  }
}
