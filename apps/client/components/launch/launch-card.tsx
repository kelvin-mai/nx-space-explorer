import { Launch } from '@space-explorer/graphql/react';

import css from './launch.module.css';

const images = ['iss', 'moon', 'space'];

const getBgImg = (id: string) =>
  `url('/assets/images/${images[Number(id) % images.length]}.jpg')`;

export interface LaunchCardProps extends Launch {}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  id,
  mission,
  rocket,
}) => (
  <a
    className={css.card}
    style={{
      backgroundImage: getBgImg(id),
    }}
  >
    <h3>{mission.name}</h3>
    <h5>{rocket.name}</h5>
  </a>
);
