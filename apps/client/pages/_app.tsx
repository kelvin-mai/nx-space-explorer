import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { getDataFromTree } from '@apollo/react-ssr';
import { ApolloProvider, NormalizedCacheObject } from '@apollo/react-hooks';

import './styles.css';
import { createClient } from '../context/apollo';

const CustomApp = ({
  Component,
  pageProps,
  apolloState,
}: AppProps & { apolloState: NormalizedCacheObject }) => {
  return (
    <ApolloProvider client={createClient(apolloState)}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

CustomApp.getInitialProps = async ({ Component, ctx }) => {
  const { AppTree } = ctx;
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps
    : {};
  const apollo = createClient();
  if (!process.browser) {
    if (ctx.res && (ctx.res.headersSent || ctx.res.finished)) {
      return pageProps;
    }
    try {
      const props = { ...pageProps, apolloState: apollo.cache.extract() };
      const appTreeProps = 'Component' in ctx ? props : { pageProps: props };
      await getDataFromTree(<AppTree {...appTreeProps} />);
    } catch (error) {
      console.error('GraphQL error occurred [getDataFromTree]', error);
    }
    Head.rewind();
  }
  return { ...pageProps, apolloState: apollo.cache.extract() };
};

export default CustomApp;
