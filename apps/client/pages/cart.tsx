import { useRouter } from 'next/router';
import {
  useMyTripsQuery,
  useBookTripsMutation,
  MyTripsDocument,
} from '@space-explorer/graphql/react';
import { useCart } from '@space-explorer/next-lib';

import { Layout, PageHeader } from '../components/layout';
import { Loader } from '../components/common';
import { UserList } from '../components/user/user-list';
import { Button } from '../components/common/button';

export const Cart = () => {
  const { data, loading } = useMyTripsQuery();
  const [bookTrips] = useBookTripsMutation();
  const router = useRouter();
  if (!loading && !data.me) {
    process.browser && router.push('/login');
  }
  const { cart, resetCart } = useCart();
  const handleBookTrips = async () => {
    await bookTrips({
      variables: { ids: cart.map((c) => c.id) },
      refetchQueries: [{ query: MyTripsDocument }],
    });
    resetCart();
    router.push('/profile');
  };
  return (
    <Layout title="Cart">
      {!loading && data?.me ? (
        <>
          <PageHeader
            subTitle={data.me.email}
            imgSrc="/assets/images/dog-1.png"
            imgAlt="user avatar"
          >
            Cart
          </PageHeader>
          <UserList trips={cart} />
          {Boolean(cart.length) && (
            <Button onClick={handleBookTrips}>book trips</Button>
          )}
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Cart;
