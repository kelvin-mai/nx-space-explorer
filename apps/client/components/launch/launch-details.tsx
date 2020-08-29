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
    <>
      <style jsx>
        {`
          .heading {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 4.5rem;
          }
          .card {
            height: 365px;
            margin-bottom: 4rem;
            border-radius: 7px;
            padding: 4rem 5rem;
            color: white;
            background-size: cover;
            background-position: center;
          }
          .img {
            height: 135px;
            margin-right: 2.5rem;
            border-radius: 50%;
          }
          .title {
            text-align: right;
          }
          .sub-title {
            margin-top: 1rem;
          }
        `}
      </style>
      <div className="heading">
        <img className="img" src="/assets/images/dog-1.png" alt="space-dog" />
        <div className="title">
          <h2>Space Explorer</h2>
          <h5 className="sub-title">email@emali.com</h5>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: getBgImg(id) }}>
        <h3>
          {rocket.name} ({rocket.type})
        </h3>
        <h5>{site}</h5>
      </div>
    </>
  );
};
