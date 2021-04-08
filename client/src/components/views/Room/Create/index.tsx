import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { HeaderLayout } from '@templates/Layout';
import CreateRoomForm from '@templates/CreateRoomForm';
import useAccount from '@hooks/useAccount';
import { createRoom as createRoomRequest } from '@services/Room/remotes';

const RoomCreateView: FC = () => {
  const router = useRouter();
  const { account } = useAccount(true);

  const createRoom = async (roomName: string) => {
    const result = await createRoomRequest({ roomName, userId: account.id });

    router.push({
      pathname: '/game/bench',
      query: {
        userId: account.id,
        roomId: result.id,
      },
    });
  };

  return (
    <HeaderLayout title='방 만들기'>
      <CreateRoomForm createRoom={createRoom} />
    </HeaderLayout>
  );
};

export default RoomCreateView;
