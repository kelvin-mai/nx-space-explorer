import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';
import { useGetLaunchLazyQuery } from '@space-explorer/graphql/react';

import { Layout } from '../../components/layout';
import { LaunchDetails } from '../../components/launch';
import { Loader } from '../../components/common';

export const Launch = () => {
  const router = useRouter();
  const { id } = router.query;
  const [query, { data, loading }] = useGetLaunchLazyQuery();
  useEffect(() => {
    if (id && typeof id === 'string') {
      query({ variables: { id } });
    }
  }, [id]);
  return (
    <Layout title="Launch Details">
      {!loading && data ? <LaunchDetails {...data.launch} /> : <Loader />}
    </Layout>
  );
};

export default Launch;
