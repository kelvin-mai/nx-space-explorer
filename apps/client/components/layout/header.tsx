import React from 'react';

import { ReactComponent as Curve } from '../../public/assets/curve.svg';
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
      `}</style>
      <Curve className="curve" />
    </header>
  );
};

export default Header;
