import { FC } from 'react';

import EntryItem from './EntryItem';
import { GlassList } from '@atoms/List';
import UserModel from '@models/UserModel';

export interface EntryListProps {
  entries: UserModel[];
}

const EntryList: FC<EntryListProps> = ({ entries }) => {
  return (
    <GlassList>
      {entries.map((entry) => (
        <EntryItem key={entry.id} nickname={entry.nickname} />
      ))}
    </GlassList>
  );
};

export default EntryList;
