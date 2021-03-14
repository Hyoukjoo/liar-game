import { FC, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { NavLayout } from "@components/Layout";
import { deleteGame, getGame } from "@services/Game/GameRemotes";
import GameModel from "src/models/GameModel";
import { Title } from "@components/Heading";

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