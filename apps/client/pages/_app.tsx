import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/react-hooks';
import withApollo, { WithApolloProps } from 'next-with-apollo';
import { createClient } from '@space-explorer/next-lib';

import './styles.css';

const CustomApp = ({
  Component,
  pageProps,
  apollo,
}: AppProps & WithApolloProps<NormalizedCacheObject>) => {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default withApollo(({ initialState }) => createClient(initialState))(
  CustomApp,
);
