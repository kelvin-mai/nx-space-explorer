import { useRouter } from 'next/router';
import {
  useMyTripsQuery,
  useBookTripsMutation,
} from '@space-explorer/graphql/react';
import { useCart } from '@space-explorer/next-lib';

import { Layout } from '../components/layout';
import { Loader, Button } from '../components/common';
import { UserList } from '../components/user/user-list';

export const Cart = () => {
  const { data, loading } = useMyTripsQuery();
  const [bookTrips] = useBookTripsMutation();
  const router = useRouter();
  if (!loading && !data.me) {
    process.browser && router.push('/login');
  }
  const { cart, resetCart } = useCart();
  const handleBookTrips = () => {
    bookTrips({ variables: { ids: cart.map((c) => c.id) } });
    resetCart();
  };
  return (
    <Layout title="Cart">
      {!loading && data?.me ? (
        <>
          <UserList title="Cart" email={data.me.email} trips={cart} />
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
