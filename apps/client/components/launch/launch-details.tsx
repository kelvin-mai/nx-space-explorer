import React from 'react';
import { Launch } from '@space-explorer/graphql/react';

import { getBgImg } from '../../utils/images';

export interface LaunchDetailsProps extends Launch {}

export const LaunchDetails: React.FC<LaunchDetailsProps> = ({
  id,
  rocket,
  site,
}) => {
  return (
    <div className="card" style={{ backgroundImage: getBgImg(id) }}>
      <style jsx>
        {`
          .card {
            height: 365px;
            margin-bottom: 4rem;
            border-radius: 7px;
            padding: 4rem 5rem;
            color: white;
            background-size: cover;
            background-position: center;
          }
        `}
      </style>
      <h3>
        {rocket.name} ({rocket.type})
      </h3>
      <h5>{site}</h5>
    </div>
  );
};
