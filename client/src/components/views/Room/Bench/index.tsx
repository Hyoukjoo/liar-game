import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import { HeaderLayout } from '@templates/Layout';
import BenchCard from '@templates/Card/BenchCard';
import RoomModel from '@models/RoomModel';
import { createGame } from '@services/Game/GameRemotes';
import { getRoom, leaveRoom } from '@services/Room/remotes';

const BenchView: FC = ({}) => {
  const router = useRouter();
  const [room, setRoom] = useState<RoomModel>();

  const roomId = String(router.query.roomId);
  const userId = Number(router.query.userId);

  useEffect(() => {
    if (roomId !== 'undefined') {
      getRoom(roomId).then((dto) => {
        const roomModel = new RoomModel(dto);
        setRoom(roomModel);
      });
    }
  }, [router.query]);

  const onClickBackIcon = async () => {
    await leaveRoom(userId);

    router.back();
  };

  const startGame = async (categoryId: number) => {
    const result = await createGame({
      roomId,
      categoryId,
    });

    router.push({
      pathname: '/game/play',
      query: { gameId: result.id },
    });
  };

  return (
    <HeaderLayout title='대기실' onClickBackIcon={onClickBackIcon}>
      {room !== undefined && (
        <BenchCard
          entries={room.member}
          categories={room.categories}
          startGame={startGame}
        />
      )}
    </HeaderLayout>
  );
};

export default BenchView;
