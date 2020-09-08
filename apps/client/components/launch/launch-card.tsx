import React from 'react';
import Link from 'next/link';
import { Launch } from '@space-explorer/graphql/react';
import { getBgImg } from '@space-explorer/next-lib';

import scss from './launch.module.scss';

export interface LaunchCardProps extends Launch {}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  id,
  mission,
  rocket,
}) => (
  <Link href={`/launch/${id}`}>
    <a className={scss.card} style={{ backgroundImage: getBgImg(id) }}>
      <h3>{mission.name}</h3>
      <h5>{rocket.name}</h5>
    </a>
  </Link>
);

export default LaunchCard;
