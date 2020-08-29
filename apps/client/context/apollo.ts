import {
  ApolloClient,
  InMemoryCache,
  FieldMergeFunction,
} from '@apollo/react-hooks';
import { LaunchConnection } from '@space-explorer/graphql/react';

const mergePagination: FieldMergeFunction<LaunchConnection> = (
  existing,
  incoming,
) => {
  return {
    ...incoming,
    launches: existing
      ? [...existing.launches, ...incoming.launches]
      : incoming.launches,
  };
};

export const client = new ApolloClient({
  uri: 'http://localhost:3333/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          launches: {
            keyArgs: [],
            merge: mergePagination,
          },
        },
      },
    },
  }),
});
