import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { Size } from '@common/enums/size';
import { TextInput } from '@atoms/Input';
import { BaseButton } from '@atoms/Button';
import { NavLayout } from '@molecules/Layout';
import useSocket from '@hooks/useSocket';
import { createRoom } from '@services/Room/remotes';

const RoomCreateView: FC = ({}) => {
  const router = useRouter();
  const userId = Number(router.query.userId);

  const { socket, roomSocket } = useSocket();

  const [roomName, setRoomName] = useState('');

  useEffect(() => {
    roomSocket?.on('successCreateRoom', console.log);
  }, [roomSocket]);

  const onClickCreateRoomButton = async () => {
    // roomSocket.emit("createRoom", {
    //   userName: router.query.userId,
    //   roomName,
    // });

    const result = await createRoom({ roomName, userId });

    router.push({
      pathname: '/game/bench',
      query: {
        userId,
        roomId: result.id,
      },
    });
  };

  const onClickBackIcon = async () => {
    router.back();
  };

  return (
    <NavLayout title='방 만들기' onClickBackIcon={onClickBackIcon}>
      <Style.Container>
        <Style.InputBox>
          <TextInput
            placeholder='방 이름'
            maxLength={12}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </Style.InputBox>
        <Style.ButtonBox>
          <BaseButton size={Size.MEDIUM} onClick={onClickCreateRoomButton}>
            만들기
          </BaseButton>
        </Style.ButtonBox>
      </Style.Container>
    </NavLayout>
  );
};

export default RoomCreateView;
