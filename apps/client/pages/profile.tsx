import React from 'react';
import { useMyTripsQuery } from '@space-explorer/graphql/react';

import { Layout, UserHeader } from '../components/layout';
import { Loader } from '../components/common';
import { LaunchCard } from '../components/launch';

export const Profile = () => {
  const { data, loading } = useMyTripsQuery();
  return (
    <Layout title="My trips">
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserHeader email={data?.me.email}>My Trips</UserHeader>
          {Boolean(data?.me.trips) &&
            data.me.trips.map((l) => <LaunchCard key={l.id} {...l} />)}
        </>
      )}
    </Layout>
  );
};

export default Profile;
