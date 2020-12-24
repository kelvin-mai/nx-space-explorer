import { useRouter } from 'next/router';
import { useMyTripsQuery } from '@space-explorer/graphql/react';

import { Layout, PageHeader } from '../components/layout';
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
        <>
          <PageHeader
            subTitle={data.me.email}
            imgSrc="/assets/images/dog-1.png"
            imgAlt="space dog"
          >
            My Trips
          </PageHeader>
          <UserList trips={data.me.trips} />
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Profile;
