import { Module, HttpModule } from '@nestjs/common';

import { LaunchService } from './launch.service';
import { LaunchResolver } from './launch.resolver';
import { MissionResolver } from './mission.resolver';

@Module({
  imports: [HttpModule],
  providers: [LaunchService, LaunchResolver, MissionResolver],
})
export class LaunchModule {}
