import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LIB_PATH } from '@space-explorer/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { environment } from '../environments/environment';
import { DatabaseConfig } from './database.config';
import { LaunchModule } from './launch/launch.module';
import { UserModule } from './user/user.module';

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
      context: ({ req }) => ({ headers: req.headers }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useClass: DatabaseConfig,
    }),
    LaunchModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
