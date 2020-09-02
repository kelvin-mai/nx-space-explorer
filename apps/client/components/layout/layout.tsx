import React from 'react';
import Head from 'next/head';

import { Header } from './header';
import { Footer } from './footer';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          padding: 3rem;
          padding-bottom: 5rem;
        }
      `}</style>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
