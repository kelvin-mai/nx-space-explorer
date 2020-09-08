import React from 'react';
import { useRouter } from 'next/router';
import { useGetLaunchAndMeQuery } from '@space-explorer/graphql/react';

import { Layout, UserHeader } from '../../components/layout';
import { LaunchDetails } from '../../components/launch';
import { Loader } from '../../components/common';

export const Launch = () => {
  const router = useRouter();
  const { data, loading } = useGetLaunchAndMeQuery({
    variables: { id: router.query.id as string },
  });
  return (
    <Layout title="Launch Details">
      {loading ? (
        <Loader />
      ) : (
        <>
          <UserHeader email={data.me?.email}>Space Explorer</UserHeader>
          <LaunchDetails {...data.launch} />
        </>
      )}
    </Layout>
  );
};

export default Launch;
