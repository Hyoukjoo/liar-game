import { FC } from 'react';

import Style from './style';
import RoomItem from './RoomItem';
import RoomModel from '@models/RoomModel';

interface RoomListProps {
  rooms: RoomModel[];
  onClickJoinButton: (roomId: string) => void;
}

const RoomList: FC<RoomListProps> = ({ rooms, onClickJoinButton }) => {
  return (
    <Style.List>
      {rooms.map((room) => (
        <RoomItem
          key={`room-item-${room.id}`}
          room={room}
          onClickJoinButton={onClickJoinButton}
        />
      ))}
    </Style.List>
  );
};

export default RoomList;
