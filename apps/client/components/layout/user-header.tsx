import scss from './layout.module.scss';

export interface UserHeaderProps {
  email?: string;
}

export const UserHeader: React.FC<UserHeaderProps> = ({ email, children }) => (
  <div>
    <div className={scss['user-header']}>
      <img
        className={scss.img}
        src="/assets/images/dog-1.png"
        alt="space-dog"
      />
      <div className={scss.title}>
        <h2>{children}</h2>
        {email && <h5 className={scss['sub-title']}>{email}</h5>}
      </div>
    </div>
  </div>
);

export default UserHeader;
