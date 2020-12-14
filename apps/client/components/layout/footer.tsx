import Link from 'next/link';
import cookie from 'js-cookie';
import { useMyTripsQuery } from '@space-explorer/graphql/react';

import scss from './layout.module.scss';
import { ReactComponent as HomeIcon } from '../../public/assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../../public/assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../../public/assets/icons/profile.svg';
import { ReactComponent as LogoutIcon } from '../../public/assets/icons/exit.svg';

export const Footer = () => {
  const { data, loading, client } = useMyTripsQuery();
  const logout = async () => {
    cookie.remove('token');
    client.cache.evict({ fieldName: 'me' });
  };
  return (
    <footer className={scss.footer}>
      <div className={scss.container}>
        <Link href="/">
          <a>
            <HomeIcon />
            Home
          </a>
        </Link>
        {!loading && data?.me ? (
          <>
            <Link href="/cart">
              <a>
                <CartIcon />
                Cart
              </a>
            </Link>
            <Link href="/profile">
              <a>
                <ProfileIcon />
                Profile
              </a>
            </Link>
            <a onClick={logout}>
              <LogoutIcon />
              Logout
            </a>
          </>
        ) : (
          <Link href="/login">
            <a>
              <ProfileIcon />
              Login
            </a>
          </Link>
        )}
      </div>
    </footer>
  );
};

export default Footer;
