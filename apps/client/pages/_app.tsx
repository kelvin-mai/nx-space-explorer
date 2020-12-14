import { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';
import { useApolloStore, CartProvider } from '@space-explorer/next-lib';

import './styles.css';

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const apollo = useApolloStore(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apollo}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ApolloProvider>
  );
};

export default CustomApp;
