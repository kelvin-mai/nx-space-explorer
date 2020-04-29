import { Launch } from 'src/graphql';

export interface LaunchResponse extends Omit<Launch, 'isBooked'> {
  missionPatchSmall: string;
  missionPatchLarge: string;
}
