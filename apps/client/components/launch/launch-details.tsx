import { Launch } from '@space-explorer/graphql/react';
import { getBgImg } from '@space-explorer/next-lib';

import css from './launch.module.css';

export interface LaunchDetailsProps extends Launch {}

export const LaunchDetails: React.FC<LaunchDetailsProps> = ({
  id,
  rocket,
  site,
}) => (
  <div className={css.card} style={{ backgroundImage: getBgImg(id) }}>
    <h3>
      {rocket.name} ({rocket.type})
    </h3>
    <h5>{site}</h5>
  </div>
);
