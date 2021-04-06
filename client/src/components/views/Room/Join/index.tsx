import { FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import RoomItem from '../components/RoomItem';
import { TextInput } from '@atoms/Input';
import { IconButton, BaseButton } from '@atoms/Button';
import { Refresh } from '@atoms/Icon';
import { HeaderLayout } from '@templates/Layout';
import useSocket from '@hooks/useSocket';
import RoomModel from '@models/RoomModel';
import { getRoomList, findRooms, joinRoom } from '@services/Room/remotes';

const RoomJoinView: FC = ({}) => {
  const router = useRouter();
  const { socket, roomSocket } = useSocket();

  const [searchValue, setSearchValue] = useState('');
  const [rooms, setRooms] = useState<RoomModel[]>();
  const [selectedRoomId, setSelectedRoomId] = useState<string>();

  useEffect(() => {
    getRoomList().then((results) => {
      const roomModels = RoomModel.createFromApi(results);
      setRooms(roomModels);
    });
  }, []);

  const onClickSearchButton = async () => {
    if (searchValue.trim().length < 1) return;
    const result = await findRooms(searchValue);

    const roomModels = RoomModel.createFromApi(result);

    setRooms(roomModels);
  };

  const onClickRoomItem = (roomId: string) => {
    setSelectedRoomId(roomId);
  };

  const onClickInitButton = async () => {
    setSearchValue('');
    setRooms(null);
    setSelectedRoomId(null);
    const result = await getRoomList();
    const roomModels = RoomModel.createFromApi(result);
    setRooms(roomModels);
  };

  const onClickJoinButton = async () => {
    const userId = Number(router.query.userId);
    const result = await joinRoom({ userId, roomId: selectedRoomId });

    router.push({
      pathname: `/game/bench`,
      query: {
        roomId: selectedRoomId,
        userId: userId,
      },
    });
  };

  const RoomItems = useCallback(
    () => (
      <Style.Ul>
        {rooms?.map((room) => (
          <RoomItem
            key={room.id}
            roomName={room.name}
            ownerName={room.owner.nickname}
            onClick={() => onClickRoomItem(room.id)}
            isSelected={selectedRoomId === room.id}
          />
        ))}
      </Style.Ul>
    ),
    [rooms, selectedRoomId, searchValue]
  );

  return (
    <HeaderLayout title='방 참여하기'>
      <Style.Container>
        <Style.SearchBox>
          <TextInput
            placeholder='방 찾기'
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
          <BaseButton onClick={onClickSearchButton}>검색</BaseButton>
        </Style.SearchBox>
        <RoomItems />
        <Style.Bottom>
          <BaseButton onClick={onClickJoinButton}>참여하기</BaseButton>
          <IconButton onClick={onClickInitButton} Svg={Refresh} />
        </Style.Bottom>
      </Style.Container>
    </HeaderLayout>
  );
};

export default RoomJoinView;
