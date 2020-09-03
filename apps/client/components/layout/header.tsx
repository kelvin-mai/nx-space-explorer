import React from 'react';

import scss from './layout.module.scss';
import { ReactComponent as Curve } from '../../public/assets/curve.svg';
import { ReactComponent as Logo } from '../../public/nx-logo-white.svg';

export interface HeaderProps {}

export const Header = () => {
  return (
    <header className={scss.header}>
      <Curve className={scss.curve} />
      <Logo className={scss.logo} />
    </header>
  );
};

export default Header;
