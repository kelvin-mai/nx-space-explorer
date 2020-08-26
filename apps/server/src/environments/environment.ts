import { EntitySchema } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const environment = () => ({
  production: false,
  port: Number(process.env.PORT),
  jwtSecret: process.env.JWT_SECRET,
  database: (entities: EntitySchema[]): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    synchronize: true,
    logging: false,
    entities,
  }),
});
