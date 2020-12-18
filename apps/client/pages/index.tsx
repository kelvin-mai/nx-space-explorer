import {
  GetLaunchesDocument,
  PatchSize,
  useGetLaunchesQuery,
} from '@space-explorer/graphql/react';
import { createClient, useInfiniteTrigger } from '@space-explorer/next-lib';

import css from './index.module.css';
import { Loader } from '../components/common';
import { LaunchCard } from '../components/launch';
import { Layout } from '../components/layout';
import { useRef } from 'react';

export function Index() {
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
        variables: {
          cursor: data.launches.cursor,
        },
      });
    }
  });
  return (
    <Layout title="Home Page">
      {Boolean(data?.launches) &&
        data.launches.launches.map((l) => <LaunchCard key={l.id} {...l} />)}
      {loading && <Loader />}
      <div className={css['load-more']} ref={intersectionRef}></div>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const apollo = createClient();
  await apollo.query({
    query: GetLaunchesDocument,
    variables: {
      size: PatchSize.Large,
    },
  });
  return {
    props: {
      initialApolloState: apollo.cache.extract(),
    },
  };
};

export default Index;
