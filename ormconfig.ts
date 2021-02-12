import { join } from 'path'
import { ConnectionOptions } from 'typeorm';

declare type TypeOrmModuleOptions = {
  retryAttempts?: number;
  retryDelay?: number;
  toRetry?: (err: any) => boolean;
  autoLoadEntities?: boolean;
  keepConnectionAlive?: boolean;
  verboseRetryLog?: boolean;
} & Partial<ConnectionOptions>;

const isDev = process.env.NODE_ENV === 'development';

const connectionOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 6697,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  autoLoadEntities: true,
  entities: ['src/**/*.entity.ts'],
  synchronize: isDev,
  dropSchema: false,
  migrations: [
    join(__dirname, 'migrations/*{.ts,.js}')
  ],
  cli: {
    migrationsDir: 'src/migrations'
  }
}

export default connectionOptions;