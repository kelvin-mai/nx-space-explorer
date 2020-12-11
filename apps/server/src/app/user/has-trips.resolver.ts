import { UseGuards } from '@nestjs/common';
import { Context, Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LaunchModel, UserModel } from '@space-explorer/types';
import { AuthGuard } from './auth.gaurd';

import { UserService } from './user.service';

@Resolver('Launch')
export class HasTripsResolver {
  constructor(private userService: UserService) {}

  @ResolveField()
  @UseGuards(AuthGuard)
  isBooked(@Parent() launch: LaunchModel, @Context('user') user: UserModel) {
    if (!user) {
      return null;
    }
    return this.userService.hasTrip(Number(launch.id), user.email);
  }
}
