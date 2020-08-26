import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LaunchModule } from '../launch/launch.module';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { UserEntity } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity]), LaunchModule, HttpModule],
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
