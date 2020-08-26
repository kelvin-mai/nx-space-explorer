import { Resolver, Query, Args } from '@nestjs/graphql';

import { LaunchService } from './launch.service';

@Resolver('Launch')
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query()
  launches() {
    return this.launchService.getAllLaunches();
  }

  @Query()
  launch(@Args('id') id: number) {
    return this.launchService.getLaunchById(id);
  }
}
