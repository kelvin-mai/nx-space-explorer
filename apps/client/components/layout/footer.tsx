import React from 'react';
import Link from 'next/link';

import scss from './layout.module.scss';
import { ReactComponent as HomeIcon } from '../../public/assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../../public/assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../../public/assets/icons/profile.svg';

export const Footer = () => (
  <footer className={scss.footer}>
    <div className={scss.container}>
      <Link href="/">
        <a>
          <HomeIcon />
          Home
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <CartIcon />
          Cart
        </a>
      </Link>
      <Link href="/profile">
        <a>
          <ProfileIcon />
          Cart
        </a>
      </Link>
    </div>
  </footer>
);

export default Footer;
