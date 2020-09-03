import React from 'react';
import Link from 'next/link';
import { Launch } from '@space-explorer/graphql/react';

import scss from './launch.module.scss';
import { getBgImg } from '../../utils/images';

export interface LaunchCardProps extends Launch {}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  id,
  mission,
  rocket,
}) => {
  return (
    <Link href={`/launch/${id}`}>
      <a className={scss.card} style={{ backgroundImage: getBgImg(id) }}>
        <h3>{mission.name}</h3>
        <h5>{rocket.name}</h5>
      </a>
    </Link>
  );
};

export default LaunchCard;
