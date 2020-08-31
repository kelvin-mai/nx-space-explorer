import React from 'react';

export interface UserHeaderProps {
  email?: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ email, children }) => {
  return (
    <div>
      <style jsx>{`
        .heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 4.5rem;
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
      `}</style>
      <div className="heading">
        <img className="img" src="/assets/images/dog-1.png" alt="space-dog" />
        <div className="title">
          <h2>{children}</h2>
          {email && <h5 className="sub-title">{email}</h5>}
        </div>
      </div>
    </div>
  );
};

export default UserHeader;
