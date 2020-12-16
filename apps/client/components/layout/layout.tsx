import Head from 'next/head';

import { Header } from './header';
import './layout.module.css';

export interface LayoutProps {
  title: string;
}

export const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;
