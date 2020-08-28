import React from 'react';
import Link from 'next/link';
import { Launch } from '@space-explorer/graphql/react';

import { getBgImg } from '../../utils/images';

export interface LaunchCardProps extends Launch {}

export const LaunchCard: React.FC<LaunchCardProps> = ({
  id,
  mission,
  rocket,
}) => {
  return (
    <Link className="card" href={`/launch/${id}`}>
      <a className="card" style={{ backgroundImage: getBgImg(id) }}>
        <style jsx>{`
          .card {
            padding: 4rem 5rem;
            border-radius: 7px;
            color: white;
            background-size: cover;
            background-position: center;
          }
          a.card {
            display: block;
            height: 193px;
            margin: 1rem;
            text-decoration: none;
          }
        `}</style>
        <h3>{mission.name}</h3>
        <h5>{rocket.name}</h5>
      </a>
    </Link>
  );
};

export default LaunchCard;
