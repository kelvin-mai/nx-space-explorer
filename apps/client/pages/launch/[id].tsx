import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  PatchSize,
  useGetLaunchAndMeLazyQuery,
} from '@space-explorer/graphql/react';
import { useCart } from '@space-explorer/next-lib';

import { Layout, PageHeader } from '../../components/layout';
import { LaunchDetails } from '../../components/launch';
import { Loader, Button } from '../../components/common';

export const Launch = () => {
  const router = useRouter();
  const { isInCart, addToCart, removeFromCart } = useCart();
  const { id } = router.query;
  const [query, { data, loading }] = useGetLaunchAndMeLazyQuery();
  useEffect(() => {
    if (id && typeof id === 'string') {
      query({ variables: { id, size: PatchSize.Large } });
    }
  }, [id]);
  return (
    <Layout title="Launch Details">
      {!loading && data ? (
        <>
          <PageHeader
            subTitle={data.me?.email}
            imgSrc={data.launch.mission.missionPatch}
            imgAlt={data.launch.mission.name}
          >
            {data.launch.mission.name}
          </PageHeader>
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
