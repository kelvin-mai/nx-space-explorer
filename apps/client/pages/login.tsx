import React, { useState } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useLoginMutation } from '@space-explorer/graphql/react';
import cookie from 'js-cookie';

import { Loader } from '../components/common';
import { Layout } from '../components/layout';

export interface LoginProps {}

export const Login: NextPage<LoginProps> = () => {
  const [login, { loading }] = useLoginMutation();
  const router = useRouter();
  const [value, setValue] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login({ variables: { email: value } });
    if (!result.errors) {
      cookie.set('token', result.data.login);
      router.push('/profile');
    }
  };

  return (
    <Layout title="Login">
      <style jsx>{`
        form {
          width: 100%;
          padding: 3.5rem;
          border-radius: 3px;
          box-shadow: 6px 6px 1px rgba(0, 0, 0, 0.25);
          color: var(--text);
          background-color: white;
        }
        input {
          width: 100%;
          margin-bottom: 1rem;
          padding: 0.75rem 1.75rem;
          border: 1px solid var(--grey);
          border-radius: 3px;
          font-size: 1rem;
          outline: none;
        }
        input:focus: {
          border-color: var(--primary);
        }
        label,
        button {
          display: block;
          margin-bottom: 1rem;
          text-align: center;
          text-transform: uppercase;
        }
        button {
          background-color: var(--primary);
          border: 0;
          border-radius: 3px;
          color: white;
          font-size: 1rem;
          font-weight: bold;
          width: 100%;
          padding: 1rem 0;
        }
      `}</style>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="login">Login</label>
          <input
            required
            id="login"
            type="email"
            name="email"
            placeholder="Email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </Layout>
  );
};

export default Login;
