import { Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';

import { PatchSize } from '@/graphql';
import { MissionModel } from './launch.models';

@Resolver('Mission')
export class MissionResolver {
  @ResolveField()
  missionPatch(@Parent() mission: MissionModel, @Args('size') size: PatchSize) {
    switch (size) {
      case PatchSize.SMALL:
        return mission.missionPatchSmall;
      case PatchSize.LARGE:
        return mission.missionPatchLarge;
      default:
        return null;
    }
  }
}
