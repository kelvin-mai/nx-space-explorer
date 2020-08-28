import React from 'react';
import { AppProps } from 'next/app';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/react-hooks';

import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

export default CustomApp;
