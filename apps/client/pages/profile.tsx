import { useRouter } from 'next/router';
import { useMyTripsQuery } from '@space-explorer/graphql/react';

import { Layout } from '../components/layout';
import { Loader } from '../components/common';
import { UserList } from '../components/user/user-list';

export const Profile = () => {
  const { data, loading } = useMyTripsQuery();
  const router = useRouter();
  if (!loading && !data.me) {
    process.browser && router.push('/login');
  }
  return (
    <Layout title="My trips">
      {!loading && data?.me ? (
        <UserList
          title="My trips"
          email={data.me.email}
          trips={data.me.trips}
        />
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Profile;
