import {
  useLoginMutation,
  useMyTripsQuery,
} from '@space-explorer/graphql/react';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { Loader } from '../components/common';

import { EmailForm } from '../components/common/email-form';
import { Layout } from '../components/layout';

export const Login = () => {
  const [login, { loading }] = useLoginMutation({
    notifyOnNetworkStatusChange: true,
  });
  const { data } = useMyTripsQuery();
  const router = useRouter();
  const handleSubmit = async (value: string) => {
    const result = await login({ variables: { email: value } });
    if (!result.errors) {
      cookie.set('token', result.data.login);
    }
  };
  if (data?.me) {
    router.push('/profile');
  }
  return (
    <Layout title="Login">
      {loading ? <Loader /> : <EmailForm onSubmit={handleSubmit} />}
    </Layout>
  );
};

export default Login;
