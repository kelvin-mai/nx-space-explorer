import React from 'react';
import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApolloStore } from '@space-explorer/next-lib';

import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const apollo = useApolloStore(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default CustomApp;
