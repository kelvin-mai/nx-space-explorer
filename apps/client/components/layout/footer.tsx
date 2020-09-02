import React from 'react';
import Link from 'next/link';

import { ReactComponent as HomeIcon } from '../../public/assets/icons/home.svg';
import { ReactComponent as CartIcon } from '../../public/assets/icons/cart.svg';
import { ReactComponent as ProfileIcon } from '../../public/assets/icons/profile.svg';

export const Footer = () => {
  return (
    <footer>
      <style jsx>{`
        footer {
          flex-shrink: 0;
          margin-top: auto;
          background-color: white;
          color: var(--text-secondary);
          position: sticky;
          bottom: 0;
        }
        .container {
          display: flex;
          align-items: center;
          max-width: 460px;
          padding: 2.5rem;
          margin: 0 auto;
        }
        a {
          flex-grow: 1;
          width: 0;
          font-family: inherit;
          font-size: 20px;
          color: inherit;
          letter-spacing: 1.5;
          text-transform: uppercase;
          text-align: center;
        }
        a svg {
          display: block;
          width: 60px;
          margin: 0 auto 0.5rem;
          fill: var(--text-secondary);
        }
      `}</style>
      <div className="container">
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
};

export default Footer;
