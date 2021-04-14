import { FC } from 'react';

import Style from './style';
import { GlassSection } from '@atoms/Section';
import { Refresh } from '@atoms/Icon';
import { RoomList } from '@organisms/List';
import RoomModel from '@models/RoomModel';

interface JoinCardProps {
  rooms: RoomModel[];
  searchRoom: (value: string) => void;
  joinRoom: (roomId: string) => void;
  refreshRoomList: () => void;
}
const JoinCard: FC<JoinCardProps> = ({
  rooms,
  searchRoom,
  joinRoom,
  refreshRoomList,
}) => {
  return (
    <GlassSection>
      <Style.RoomSearchInput onSearch={searchRoom} />
      <RoomList rooms={rooms} onClickJoinButton={joinRoom} />
      <Style.RefreshButton Svg={Refresh} onClick={refreshRoomList} />
    </GlassSection>
  );
};

export default JoinCard;
