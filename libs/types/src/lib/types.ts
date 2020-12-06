import * as ServerSchema from '@space-explorer/graphql';

export interface LaunchModel
  extends Omit<ServerSchema.Launch, 'mission' | 'isBooked'> {
  mission: MissionModel;
}

export interface MissionModel {
  name?: string;
  missionPatchSmall: string;
  missionPatchLarge: string;
}

export interface LaunchConnectionModel
  extends Omit<ServerSchema.LaunchConnection, 'launches'> {
  launches: LaunchModel[];
}
