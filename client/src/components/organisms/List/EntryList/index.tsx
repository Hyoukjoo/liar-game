import { FC } from 'react';

import Style from './style';
import EntryItem from './EntryItem';
import UserModel from '@models/UserModel';

export interface EntryListProps {
  entries: UserModel[];
}

const EntryList: FC<EntryListProps> = ({ entries }) => {
  return (
    <Style.EntryList>
      {entries.map((entry) => (
        <EntryItem key={entry.id} nickname={entry.nickname} />
      ))}
    </Style.EntryList>
  );
};

export default EntryList;
