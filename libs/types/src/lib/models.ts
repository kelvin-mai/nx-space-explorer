import * as ServerSchema from '@space-explorer/graphql';

export type UserModel = Omit<ServerSchema.User, 'trips'> | null;

export interface TripUpdateResponseModel
  extends Omit<ServerSchema.TripUpdateResponse, 'launches'> {
  launches: number[];
}

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
