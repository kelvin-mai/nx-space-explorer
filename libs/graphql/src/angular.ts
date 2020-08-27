import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};



export type Launch = {
  __typename?: 'Launch';
  id: Scalars['ID'];
  site?: Maybe<Scalars['String']>;
  mission?: Maybe<Mission>;
  rocket?: Maybe<Rocket>;
  isBooked: Scalars['Boolean'];
};

export type Rocket = {
  __typename?: 'Rocket';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Mission = {
  __typename?: 'Mission';
  name?: Maybe<Scalars['String']>;
  missionPatch?: Maybe<Scalars['String']>;
};


export type MissionMissionPatchArgs = {
  size?: Maybe<PatchSize>;
};

export enum PatchSize {
  Small = 'SMALL',
  Large = 'LARGE'
}

export type Query = {
  __typename?: 'Query';
  launch?: Maybe<Launch>;
  launches: Array<Maybe<Launch>>;
  me?: Maybe<User>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  trips?: Maybe<Array<Maybe<Launch>>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<Scalars['String']>;
  bookTrips: TripUpdateResponse;
  cancelTrip: TripUpdateResponse;
};


export type MutationLoginArgs = {
  email?: Maybe<Scalars['String']>;
};


export type MutationBookTripsArgs = {
  launchIds: Array<Maybe<Scalars['ID']>>;
};


export type MutationCancelTripArgs = {
  launchId: Scalars['ID'];
};

export type TripUpdateResponse = {
  __typename?: 'TripUpdateResponse';
  success: Scalars['Boolean'];
  message?: Maybe<Scalars['String']>;
  launches?: Maybe<Array<Maybe<Launch>>>;
};

export type LaunchResultFragment = (
  { __typename?: 'Launch' }
  & Pick<Launch, 'id' | 'site' | 'isBooked'>
  & { rocket?: Maybe<(
    { __typename?: 'Rocket' }
    & Pick<Rocket, 'id' | 'name' | 'type'>
  )> }
);

export type GetLaunchesQueryVariables = Exact<{
  size?: Maybe<PatchSize>;
}>;


export type GetLaunchesQuery = (
  { __typename?: 'Query' }
  & { launches: Array<Maybe<(
    { __typename?: 'Launch' }
    & { mission?: Maybe<(
      { __typename?: 'Mission' }
      & Pick<Mission, 'name' | 'missionPatch'>
    )> }
    & LaunchResultFragment
  )>> }
);

export type GetLaunchQueryVariables = Exact<{
  id: Scalars['ID'];
  size?: Maybe<PatchSize>;
}>;


export type GetLaunchQuery = (
  { __typename?: 'Query' }
  & { launch?: Maybe<(
    { __typename?: 'Launch' }
    & { mission?: Maybe<(
      { __typename?: 'Mission' }
      & Pick<Mission, 'name' | 'missionPatch'>
    )> }
    & LaunchResultFragment
  )> }
);

export type UserResultFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id' | 'email'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & UserResultFragment
  )> }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'login'>
);

export const LaunchResultFragmentDoc = gql`
    fragment LaunchResult on Launch {
  id
  site
  isBooked
  rocket {
    id
    name
    type
  }
}
    `;
export const UserResultFragmentDoc = gql`
    fragment UserResult on User {
  id
  email
}
    `;
export const GetLaunchesDocument = gql`
    query GetLaunches($size: PatchSize) {
  launches {
    ...LaunchResult
    mission {
      name
      missionPatch(size: $size)
    }
  }
}
    ${LaunchResultFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLaunchesGQL extends Apollo.Query<GetLaunchesQuery, GetLaunchesQueryVariables> {
    document = GetLaunchesDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetLaunchDocument = gql`
    query GetLaunch($id: ID!, $size: PatchSize) {
  launch(id: $id) {
    ...LaunchResult
    mission {
      name
      missionPatch(size: $size)
    }
  }
}
    ${LaunchResultFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class GetLaunchGQL extends Apollo.Query<GetLaunchQuery, GetLaunchQueryVariables> {
    document = GetLaunchDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const MeDocument = gql`
    query Me {
  me {
    ...UserResult
  }
}
    ${UserResultFragmentDoc}`;

  @Injectable({
    providedIn: 'root'
  })
  export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
    document = MeDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const LoginDocument = gql`
    mutation Login($email: String!) {
  login(email: $email)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
    document = LoginDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }