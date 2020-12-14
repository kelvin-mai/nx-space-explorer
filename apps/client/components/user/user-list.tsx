import { Launch } from '@space-explorer/graphql/react';

import { UserHeader } from '../layout';
import { LaunchCard } from '../launch';

interface UserListProps {
  title: string;
  email: string;
  trips?: Launch[];
}

export const UserList: React.FC<UserListProps> = ({ title, email, trips }) => (
  <>
    <UserHeader email={email}>{title}</UserHeader>
    {Boolean(trips) && trips.map((l) => <LaunchCard key={l.id} {...l} />)}
  </>
);
