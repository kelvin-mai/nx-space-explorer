import { Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';

import { PatchSize } from 'src/graphql';
import { MissionModel } from './launch.models';

@Resolver('Mission')
export class MissionResolver {
  @ResolveField()
  missionPatch(@Parent() launch: MissionModel, @Args('size') size: PatchSize) {
    switch (size) {
      case PatchSize.SMALL:
        return launch.missionPatchSmall;
      case PatchSize.LARGE:
        return launch.missionPatchLarge;
      default:
        return null;
    }
  }
}
