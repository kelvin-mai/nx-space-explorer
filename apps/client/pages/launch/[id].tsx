import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import {
  PatchSize,
  useGetLaunchAndMeLazyQuery,
  useCancelTripMutation,
  MyTripsDocument,
  GetLaunchAndMeDocument,
} from '@space-explorer/graphql/react';
import { useCart } from '@space-explorer/next-lib';

import { Layout, PageHeader } from '../../components/layout';
import { LaunchDetails } from '../../components/launch';
import { Loader } from '../../components/common';
import { Button } from 'apps/client/components/common/button';

export const Launch = () => {
  const router = useRouter();
  const { id } = router.query;
  const { isInCart, addToCart, removeFromCart } = useCart();
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
    return null;
  };

  return (
    <Layout title="Launch Details">
      {!loading && data ? (
        <>
          <PageHeader
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
