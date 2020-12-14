import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useGetLaunchAndMeLazyQuery } from '@space-explorer/graphql/react';
import { useCart } from '@space-explorer/next-lib';

import { Layout, UserHeader } from '../../components/layout';
import { LaunchDetails } from '../../components/launch';
import { Loader, Button } from '../../components/common';

export const Launch = () => {
  const router = useRouter();
  const { isInCart, addToCart, removeFromCart } = useCart();
  const { id } = router.query;
  const [query, { data, loading }] = useGetLaunchAndMeLazyQuery();
  useEffect(() => {
    if (id && typeof id === 'string') {
      query({ variables: { id } });
    }
  }, [id]);
  return (
    <Layout title="Launch Details">
      {!loading && data ? (
        <>
          <UserHeader email={data.me?.email}>Space Explorer</UserHeader>
          <LaunchDetails {...data.launch} />
          {isInCart(data.launch) ? (
            <Button onClick={() => removeFromCart(data.launch)}>
              remove from cart
            </Button>
          ) : (
            <Button onClick={() => addToCart(data.launch)}>add to cart</Button>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Launch;
