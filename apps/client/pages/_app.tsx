import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/react-hooks';

import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const client = new ApolloClient({
    uri: 'http://localhost:3333/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <>
      <ApolloProvider client={client}>
        <Head>
          <title>Welcome to client!</title>
        </Head>
        <div className="app">
          <header className="flex">
            <NxLogo width="75" height="50" />
            <h1>Welcome to client!</h1>
          </header>
          <main>
            <Component {...pageProps} />
          </main>
        </div>
      </ApolloProvider>
    </>
  );
};

export default CustomApp;
