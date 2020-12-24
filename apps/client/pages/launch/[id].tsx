import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  PatchSize,
  MyTripsDocument,
  GetLaunchAndMeDocument,
  useGetLaunchAndMeLazyQuery,
  useCancelTripMutation,
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
  const [cancelTrip] = useCancelTripMutation();
  useEffect(() => {
    if (id && typeof id === 'string') {
      query({ variables: { id, size: PatchSize.Large } });
    }
  }, [id]);
  const getActionButton = () => {
    if (data.me) {
      if (data.launch.isBooked) {
        return (
          <Button
            onClick={async () =>
              await cancelTrip({
                variables: { id: data.launch.id },
                refetchQueries: [
                  { query: MyTripsDocument },
                  {
                    query: GetLaunchAndMeDocument,
                    variables: { id: data.launch.id },
                  },
                ],
              })
            }
          >
            cancel booking
          </Button>
        );
      }
      if (isInCart(data.launch)) {
        return (
          <Button onClick={() => removeFromCart(data.launch)}>
            remove from cart
          </Button>
        );
      } else {
        return (
          <Button onClick={() => addToCart(data.launch)}>add to cart</Button>
        );
      }
    }
  };
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
          {getActionButton()}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Launch;
