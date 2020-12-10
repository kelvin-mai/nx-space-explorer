import { UseGuards } from '@nestjs/common';
import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UserModel } from '@space-explorer/types';
import { LaunchService } from '../launch/launch.service';
import { AuthGuard } from './auth.gaurd';
import { UserEntity } from './user.entity';

import { UserService } from './user.service';

@Resolver('User')
export class UserResolver {
  constructor(
    private userService: UserService,
    private launchService: LaunchService
  ) {}

  @Query()
  @UseGuards(AuthGuard)
  me(@Context('user') user: UserModel) {
    if (!user) {
      return null;
    }
    return this.userService.getUserByEmail(user.email);
  }

  @ResolveField()
  trips(@Parent() { trips }: UserEntity) {
    return this.launchService.getLaunchByIds(trips || []);
  }

  @Mutation()
  async login(@Args('email') email: string) {
    let user = await this.userService.getUserByEmail(email);
    if (!user) {
      user = await this.userService.createUser(email);
    }
    return this.userService.createToken(user);
  }

  @Mutation()
  @UseGuards(AuthGuard)
  bookTrips(
    @Args('launchIds') ids: string[],
    @Context('user') user: UserModel
  ) {
    if (!user) {
      return null;
    }
    return this.userService.addTrips(ids.map(Number), user.email);
  }

  @Mutation()
  @UseGuards(AuthGuard)
  cancelTrip(@Args('launchId') id: string, @Context('user') user: UserModel) {
    if (!user) {
      return null;
    }
    return this.userService.removeTrips(Number(id), user.email);
  }
}
