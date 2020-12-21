import Head from 'next/head';

import { Footer } from './footer';
import { Header } from './header';
import css from './layout.module.css';

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
      <main className={css.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
