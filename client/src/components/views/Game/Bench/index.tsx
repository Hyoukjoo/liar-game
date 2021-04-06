import { ChangeEvent, FC, useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { BaseButton } from '@atoms/Button';
import { Title } from '@atoms/Heading';
import { HeaderLayout } from '@templates/Layout';
import EntryItem from '@views/Game/components/EntryItem';
import UserModel from '@models/UserModel';
import RoomModel from '@models/RoomModel';
import { getRoom, leaveRoom } from '@services/Room/remotes';
import { createGame } from '@services/Game/GameRemotes';

const GameBenchView: FC = ({}) => {
  const router = useRouter();
  const [room, setRoom] = useState<RoomModel>();
  const [member, setMember] = useState<UserModel[]>();
  const [categoryId, setCategoryId] = useState<number>();

  const roomId = String(router.query.roomId);
  const userId = Number(router.query.userId);

  useEffect(() => {
    getRoom(roomId as string).then((dto) => {
      const roomModel = new RoomModel(dto);
      setRoom(roomModel);
      setMember(roomModel.member);
    });
  }, []);

  const onClickStartButton = async () => {
    const result = await createGame({
      roomId,
      categoryId,
    });

    router.push({
      pathname: '/game/play',
      query: {
        gameId: result.id,
      },
    });
  };

  const onClickBackIcon = async () => {
    await leaveRoom(userId);

    router.back();
  };

  const onChangeCategorySelect = (e: ChangeEvent<HTMLSelectElement>) => {
    setCategoryId(Number(e.target.value));
  };

  const EntryList = useCallback(
    () => (
      <Style.Ul>
        {member?.map((user) => (
          <EntryItem
            key={`${user.id}-${roomId}`}
            entryName={user.nickname}
            isOwner={room.owner.id === user.id}
          />
        ))}
      </Style.Ul>
    ),
    [member]
  );

  return (
    <HeaderLayout title='대기실' onClickBackIcon={onClickBackIcon}>
      <Style.Container>
        <Title>카테고리</Title>
        <select onChange={onChangeCategorySelect}>
          <option value='1'>동물</option>
          <option value='2'>위인</option>
          <option value='3'>드라마</option>
        </select>
        <Title>인원</Title>
        <p>{`${member?.length} / 10`}</p>
        <Style.EntryList>참여자</Style.EntryList>
        <EntryList />
        <Style.Bottom>
          <BaseButton onClick={onClickStartButton}>시작하기</BaseButton>
        </Style.Bottom>
      </Style.Container>
    </HeaderLayout>
  );
};

export default GameBenchView;
