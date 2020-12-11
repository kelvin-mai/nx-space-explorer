import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { LaunchModule } from '../launch/launch.module';
import { UserEntity } from './user.entity';
import { TripUpdateResponseResolver } from './trip-update-response.resolver';
import { HasTripsResolver } from './has-trips.resolver';

@Module({
  imports: [LaunchModule, HttpModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,
    UserResolver,
    TripUpdateResponseResolver,
    HasTripsResolver,
  ],
})
export class UserModule {}
