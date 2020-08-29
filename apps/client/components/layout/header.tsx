import React from 'react';

import { ReactComponent as Curve } from '../../public/assets/curve.svg';
import { ReactComponent as Logo } from '../../public/nx-logo-white.svg';
import { colors } from '../../utils/styles';

export interface HeaderProps {}

export const Header = () => {
  return (
    <header>
      <style jsx global>{`
        header {
          width: 100%;
          padding: 2.5rem;
          position: relative;
        }
        .curve {
          height: 4rem;
          width: 100%;
          fill: ${colors.primary};
          position: absolute;
          top: 0;
          left: 0;
        }
        .logo {
          height: 3rem;
          z-index: 10;
          position: absolute;
          top: 0.5rem;
          left: 50%;
          transform: translateX(-50%);
        }
      `}</style>
      <Curve className="curve" />
      <Logo className="logo" />
    </header>
  );
};

export default Header;
