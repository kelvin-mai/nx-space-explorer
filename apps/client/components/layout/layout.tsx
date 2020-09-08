import React from 'react';
import Head from 'next/head';

import scss from './layout.module.scss';
import { Header } from './header';
import { Footer } from './footer';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <Header />
    <main className={scss.container}>{children}</main>
    <Footer />
  </>
);

export default Layout;
