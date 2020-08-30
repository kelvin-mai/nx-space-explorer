import {
  ApolloClient,
  InMemoryCache,
  FieldMergeFunction,
  InMemoryCacheConfig,
  NormalizedCacheObject,
  ApolloLink,
  HttpLink,
  concat,
} from '@apollo/react-hooks';
import { LaunchConnection } from '@space-explorer/graphql/react';
import cookies from 'js-cookie';

const getToken = () => {
  if (!process.browser) {
    return null;
  }
  return `Bearer ${cookies.get('token')}`;
};

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

const cacheOptions: InMemoryCacheConfig = {
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
};

const httpLink = new HttpLink({
  uri: 'http://localhost:3333/graphql',
});

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: getToken(),
    },
  });
  return forward(operation);
});

export const createClient = (initialState?: NormalizedCacheObject) =>
  new ApolloClient({
    link: concat(authLink, httpLink),
    ssrMode: !process.browser,
    cache: new InMemoryCache(cacheOptions).restore(initialState || {}),
  });
