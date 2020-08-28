import React from 'react';

import { ReactComponent as Logo } from '../../public/assets/logo.svg';

export interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .loading {
          height: 8rem;
          display: block;
          margin: auto;
          fill: #d8d9e0;
        }
        .loading path {
          transform-origin: center;
          animation: spin 1s linear infinite;
        }
      `}</style>
      <Logo className="loading" />
    </>
  );
};

export default Loader;
