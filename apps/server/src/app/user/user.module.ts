import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LaunchModule } from '../launch/launch.module';
import { UserEntity } from './user.entity';

@Module({
  imports: [LaunchModule, HttpModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, UserResolver],
})
export class UserModule {}
