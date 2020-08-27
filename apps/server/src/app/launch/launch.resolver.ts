import { Resolver, Query, Args } from '@nestjs/graphql';

import { LaunchService } from './launch.service';

@Resolver('Launch')
export class LaunchResolver {
  constructor(private launchService: LaunchService) {}

  @Query()
  launches(
    @Args('pageSize') pageSize?: number,
    @Args('cursor') cursor?: string,
  ) {
    return this.launchService.getAllLaunches(pageSize, cursor);
  }

  @Query()
  launch(@Args('id') id: number) {
    return this.launchService.getLaunchById(id);
  }
}
