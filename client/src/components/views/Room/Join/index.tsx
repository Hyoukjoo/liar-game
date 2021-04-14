import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import { HeaderLayout } from '@templates/Layout';
import useSocket from '@hooks/useSocket';
import RoomModel from '@models/RoomModel';
import {
  getRoomList,
  findRooms,
  joinRoom as joinRoomRequest,
} from '@services/Room/remotes';
import JoinCard from '@templates/Card/JoinCard';

const RoomJoinView: FC = ({}) => {
  const router = useRouter();
  const { socket, roomSocket } = useSocket();

  const [rooms, setRooms] = useState<RoomModel[]>([]);

  useEffect(() => {
    getRoomList().then((results) => {
      const roomModels = RoomModel.createFromApi(results);
      setRooms(roomModels);
    });
  }, []);

  const searchRoom = async (value: string) => {
    if (value.trim().length < 1) return;

    const result = await findRooms(value);

    const roomModels = RoomModel.createFromApi(result);

    setRooms(roomModels);
  };

  const joinRoom = async (roomId: string) => {
    const userId = Number(router.query.userId);
    const result = await joinRoomRequest({ userId, roomId });

    if (result !== null) {
      router.push({
        pathname: `/game/bench`,
        query: {
          roomId,
          userId,
        },
      });
    }
  };

  const refreshRoomList = async () => {
    const result = await getRoomList();
    const roomModels = RoomModel.createFromApi(result);
    setRooms(roomModels);
  };

  return (
    <HeaderLayout title='방 참여하기'>
      <JoinCard
        rooms={rooms}
        searchRoom={searchRoom}
        joinRoom={joinRoom}
        refreshRoomList={refreshRoomList}
      />
    </HeaderLayout>
  );
};

export default RoomJoinView;
