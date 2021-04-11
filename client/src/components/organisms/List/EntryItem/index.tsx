import { FC } from 'react';

import Style from './style';

export interface EntryItemProps {
  nickname: string;
}

const EntryItem: FC<EntryItemProps> = ({ nickname }) => {
  return <Style.Item>{nickname}</Style.Item>;
};

export default EntryItem;
