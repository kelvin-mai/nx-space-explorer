import React, { useRef } from 'react';
import { useGetLaunchesQuery, PatchSize } from '@space-explorer/graphql/react';

import scss from './pages.module.scss';
import { Layout } from '../components/layout';
import { LaunchCard } from '../components/launch';
import { Loader } from '../components/common';
import { useInfiniteTrigger } from '../context/hooks';

export const Index = () => {
  const { data, loading, fetchMore } = useGetLaunchesQuery({
    variables: {
      size: PatchSize.Large,
    },
    notifyOnNetworkStatusChange: true,
  });
  const intersectionRef = useRef(null);
  useInfiniteTrigger(intersectionRef, () => {
    if (
      data?.launches.cursor &&
      data?.launches.hasMore &&
      !loading &&
      fetchMore
    ) {
      fetchMore({
        variables: { cursor: data.launches.cursor },
      });
    }
  });
  return (
    <Layout title="Home Page">
      {Boolean(data?.launches) &&
        data.launches.launches.map((l) => <LaunchCard key={l.id} {...l} />)}
      {loading && <Loader />}
      <div className={scss['load-more']} ref={intersectionRef} />
    </Layout>
  );
};

export default Index;
