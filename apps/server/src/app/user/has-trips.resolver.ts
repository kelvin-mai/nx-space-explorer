import { ResolveField, Resolver, Parent, Context } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { LaunchModel, UserModel } from '@space-explorer/types';

import { UserService } from './user.service';
import { AuthGuard } from './auth.gaurd';

@Resolver('Launch')
export class HasTripsResolver {
  constructor(private userService: UserService) {}

  @ResolveField()
  @UseGuards(AuthGuard)
  isBooked(
    @Parent() launch: LaunchModel,
    @Context('user') user: UserModel | null,
  ) {
    if (!user) {
      return null;
    }
    return this.userService.hasTrip(Number(launch.id), user.email);
  }
}
