import React from 'react';
import { useGetLaunchesQuery, PatchSize } from '@space-explorer/graphql/react';

import { Layout } from '../components/layout';
import { LaunchCard } from '../components/launch';
import { Loader } from '../components/common';

const styles = (
  <style jsx>{`
    * {
      margin: 0;
      padding: 0;
    }
  `}</style>
);

export const Index = () => {
  const { data, loading } = useGetLaunchesQuery({
    variables: {
      size: PatchSize.Large,
    },
  });
  return (
    <Layout title="Home Page">
      {styles}
      {loading ? (
        <Loader />
      ) : (
        data.launches.launches?.map((l) => <LaunchCard {...l} />)
      )}
    </Layout>
  );
};

export default Index;
