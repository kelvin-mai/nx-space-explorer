import { Launch } from '@space-explorer/graphql/react';

import { LaunchCard } from '../launch';

interface UserListProps {
  trips?: Launch[];
}

export const UserList: React.FC<UserListProps> = ({ trips }) => (
  <>{Boolean(trips) && trips.map((l) => <LaunchCard key={l.id} {...l} />)}</>
);
