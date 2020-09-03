import React from 'react';
import { Launch } from '@space-explorer/graphql/react';
import { getBgImg } from '@space-explorer/next-lib';

import scss from './launch.module.scss';

export interface LaunchDetailsProps extends Launch {}

export const LaunchDetails: React.FC<LaunchDetailsProps> = ({
  id,
  rocket,
  site,
}) => {
  return (
    <>
      <div className={scss.card} style={{ backgroundImage: getBgImg(id) }}>
        <h3>
          {rocket.name} ({rocket.type})
        </h3>
        <h5>{site}</h5>
      </div>
    </>
  );
};
