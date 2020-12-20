import { useRouter } from 'next/router';
import { useMyTripsQuery } from '@space-explorer/graphql/react';

import { Layout } from '../components/layout';
import { UserList } from '../components/user/user-list';
import { Loader } from '../components/common';

export const Profile = () => {
  const { data, loading } = useMyTripsQuery();
  const router = useRouter();
  if (!loading && !data.me) {
    process.browser && router.push('/login');
  }
  return (
    <Layout title="My Trips">
      {!loading && data?.me ? <UserList trips={data.me.trips} /> : <Loader />}
    </Layout>
  );
};

export default Profile;
