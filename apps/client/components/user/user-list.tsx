import { Launch } from '@space-explorer/graphql/react';

import { PageHeader } from '../layout';
import { LaunchCard } from '../launch';

interface UserListProps {
  title: string;
  email: string;
  trips?: Launch[];
}

export const UserList: React.FC<UserListProps> = ({ title, email, trips }) => (
  <>
    <PageHeader
      subTitle={email}
      imgSrc="/assets/images/dog-1.png"
      imgAlt="space dog"
    >
      {title}
    </PageHeader>
    {Boolean(trips) && trips.map((l) => <LaunchCard key={l.id} {...l} />)}
  </>
);
