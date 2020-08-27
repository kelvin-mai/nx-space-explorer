import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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

export type LaunchConnection = {
  __typename?: 'LaunchConnection';
  cursor: Scalars['String'];
  hasMore: Scalars['Boolean'];
  launches: Array<Maybe<Launch>>;
};

export enum PatchSize {
  Small = 'SMALL',
  Large = 'LARGE'
}

export type Query = {
  __typename?: 'Query';
  launch?: Maybe<Launch>;
  launches: LaunchConnection;
  me?: Maybe<User>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchesArgs = {
  pageSize?: Maybe<Scalars['Int']>;
  cursor?: Maybe<Scalars['String']>;
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
  & Pick<Launch, 'id' | 'site'>
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
  & { launches: (
    { __typename?: 'LaunchConnection' }
    & Pick<LaunchConnection, 'hasMore' | 'cursor'>
    & { launches: Array<Maybe<(
      { __typename?: 'Launch' }
      & { mission?: Maybe<(
        { __typename?: 'Mission' }
        & Pick<Mission, 'name' | 'missionPatch'>
      )> }
      & LaunchResultFragment
    )>> }
  ) }
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
    hasMore
    cursor
    launches {
      ...LaunchResult
      mission {
        name
        missionPatch(size: $size)
      }
    }
  }
}
    ${LaunchResultFragmentDoc}`;

/**
 * __useGetLaunchesQuery__
 *
 * To run a query within a React component, call `useGetLaunchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLaunchesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLaunchesQuery({
 *   variables: {
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetLaunchesQuery(baseOptions?: Apollo.QueryHookOptions<GetLaunchesQuery, GetLaunchesQueryVariables>) {
        return Apollo.useQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GetLaunchesDocument, baseOptions);
      }
export function useGetLaunchesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLaunchesQuery, GetLaunchesQueryVariables>) {
          return Apollo.useLazyQuery<GetLaunchesQuery, GetLaunchesQueryVariables>(GetLaunchesDocument, baseOptions);
        }
export type GetLaunchesQueryHookResult = ReturnType<typeof useGetLaunchesQuery>;
export type GetLaunchesLazyQueryHookResult = ReturnType<typeof useGetLaunchesLazyQuery>;
export type GetLaunchesQueryResult = Apollo.QueryResult<GetLaunchesQuery, GetLaunchesQueryVariables>;
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

/**
 * __useGetLaunchQuery__
 *
 * To run a query within a React component, call `useGetLaunchQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLaunchQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLaunchQuery({
 *   variables: {
 *      id: // value for 'id'
 *      size: // value for 'size'
 *   },
 * });
 */
export function useGetLaunchQuery(baseOptions?: Apollo.QueryHookOptions<GetLaunchQuery, GetLaunchQueryVariables>) {
        return Apollo.useQuery<GetLaunchQuery, GetLaunchQueryVariables>(GetLaunchDocument, baseOptions);
      }
export function useGetLaunchLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLaunchQuery, GetLaunchQueryVariables>) {
          return Apollo.useLazyQuery<GetLaunchQuery, GetLaunchQueryVariables>(GetLaunchDocument, baseOptions);
        }
export type GetLaunchQueryHookResult = ReturnType<typeof useGetLaunchQuery>;
export type GetLaunchLazyQueryHookResult = ReturnType<typeof useGetLaunchLazyQuery>;
export type GetLaunchQueryResult = Apollo.QueryResult<GetLaunchQuery, GetLaunchQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...UserResult
  }
}
    ${UserResultFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!) {
  login(email: $email)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;