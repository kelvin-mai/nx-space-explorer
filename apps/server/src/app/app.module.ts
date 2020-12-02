import { join } from 'path';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { LIB_PATH } from '@space-explorer/graphql';

import { environment } from '../environments/environment';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseConfig } from './database.config';

const lib = join(process.cwd(), LIB_PATH);

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [environment],
    }),
    GraphQLModule.forRoot({
      typePaths: [join(lib, 'schemas/**/*.graphql')],
      definitions: {
        path: join(lib, 'lib/graphql.ts'),
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
