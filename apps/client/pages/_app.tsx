import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import { useApolloStore } from '@space-explorer/next-lib';

import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  const client = useApolloStore(pageProps.initialApolloState);
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default CustomApp;
