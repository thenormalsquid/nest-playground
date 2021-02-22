import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path'
import * as Joi from 'joi';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SakeModule } from './sake/sake.module';
import { SakeRatingModule } from './sake-rating/sake-rating.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

/**
 * To specify another path for this file, 
 * let’s pass in an options object into the forRoot() method 
 * and set the envFilePath property like so:
   
 * In this example, we’re looking instead for a .environment file.
 */
// ConfigModule.forRoot({
//   envFilePath: '.environment’,
// });

/** 
 * Have ConfigModule *ignore* .env files 
 * Useful when using Provider UI's such as Heroku, etc (and they handle all ENV variables)
 */
// ConfigModule.forRoot({
//   ignoreEnvFile: true,
// });
@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema: Joi.object({
        DATABASE_HOST: Joi.required(),
        DATABASE_PORT: Joi.number().default(6697),
      })
    }),
    SakeModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: true,
      entities: ['src/**/*.entity.js'], // this needs to be js to point to the compiled entities
      dropSchema: false,
      migrations: [
        join(__dirname, 'src/migrations/*.js') // this needs to be js to point to the compiled migrations
      ],
      cli: {
        migrationsDir: 'src/migrations'
      }
    }),
    SakeRatingModule,
    DatabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
