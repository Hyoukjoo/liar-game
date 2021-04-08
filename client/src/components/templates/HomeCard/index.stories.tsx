import { useState } from 'react';
import { text } from '@storybook/addon-knobs';

import HomeCard from '.';

export default {
  title: 'TEMPLATE/HOME CARD',
};

export const Home_Card = () => {
  const [isLogin, setIsLogin] = useState(true);
  const nickname = text('nickname', '자양동 꿀주먹');

  const onClickCreateRoomButton = () => {};
  const onClickJoinRoomButton = () => {};
  const onClickLoginButton = () => setIsLogin(true);
  const onClickLogoutButton = () => setIsLogin(false);

  return (
    <HomeCard
      nickname={isLogin ? nickname : undefined}
      isLogin={isLogin}
      onClickCreateRoomButton={onClickCreateRoomButton}
      onClickJoinRoomButton={onClickJoinRoomButton}
      onClickLoginButton={onClickLoginButton}
      onClickLogoutButton={onClickLogoutButton}
    />
  );
};
