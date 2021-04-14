import { FC } from 'react';

import Style from './style';
import { RightArrowFat } from '@atoms/Icon';
import { IconButton } from '@molecules/Button';
import RoomModel from '@models/RoomModel';

interface RoomItemProps {
  room: RoomModel;
  onClickJoinButton: (roomId: string) => void;
}

const RoomItem: FC<RoomItemProps> = ({ room, onClickJoinButton }) => {
  const _onClickJoinButton = () => {
    onClickJoinButton(room.id);
  };

  return (
    <Style.Item>
      <Style.LeftSide>
        <Style.RoomName>{room.name}</Style.RoomName>
        <Style.OwnerName>{room.owner.nickname}</Style.OwnerName>
      </Style.LeftSide>
      <IconButton
        Svg={RightArrowFat}
        width='16px'
        height='16px'
        onClick={_onClickJoinButton}
      />
    </Style.Item>
  );
};

export default RoomItem;
