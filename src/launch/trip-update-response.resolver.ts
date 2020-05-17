import { Resolver, ResolveField, Parent } from '@nestjs/graphql';

import { TripUpdateResponseModel } from '@/user/user.models';
import { LaunchService } from './launch.service';

@Resolver('TripUpdateResponse')
export class TripUpdateResponseResolver {
  constructor(private launchService: LaunchService) {}

  @ResolveField()
  launches(@Parent() trip: TripUpdateResponseModel) {
    return this.launchService.getLaunchByIds(trip.launches);
  }
}
