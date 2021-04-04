import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { Title } from '@atoms/Heading';
import { NavLayout } from '@molecules/Layout';
import GameModel from '@models/GameModel';
import { deleteGame, getGame } from '@services/Game/GameRemotes';

const PlayView: FC = ({}) => {
  const router = useRouter();

  const [game, setGame] = useState<GameModel>();
  const gameId = Number(router.query.gameId);

  useEffect(() => {
    getGame(gameId).then((result) => {
      const gameModel = new GameModel(result);
      setGame(gameModel);
    });
  }, []);

  const onClickBackIcon = async () => {
    const result = deleteGame(gameId);

    router.back();
  };

  return (
    <NavLayout title='플레이' onClickBackIcon={onClickBackIcon}>
      <Style.Container>
        <Title>{`카테고리: ${game.category.name}`}</Title>
      </Style.Container>
    </NavLayout>
  );
};

export default PlayView;
