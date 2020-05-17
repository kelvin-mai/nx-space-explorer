import { User, TripUpdateResponse } from '@/graphql';

export interface UserModel extends Omit<User, 'trips'> {}

export interface TripUpdateResponseModel
  extends Omit<TripUpdateResponse, 'launches'> {
  launches: number[];
}
