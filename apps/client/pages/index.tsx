import { PatchSize, useGetLaunchesQuery } from '@space-explorer/graphql/react';

import { Loader } from '../components/common';
import { LaunchCard } from '../components/launch';
import { Layout } from '../components/layout';

export function Index() {
  const { data, loading } = useGetLaunchesQuery({
    variables: {
      size: PatchSize.Large,
    },
  });
  console.log(data);
  return (
    <Layout title="Home Page">
      {Boolean(data?.launches) &&
        data.launches.launches.map((l) => <LaunchCard key={l.id} {...l} />)}
      {loading && <Loader />}
    </Layout>
  );
}

export default Index;
