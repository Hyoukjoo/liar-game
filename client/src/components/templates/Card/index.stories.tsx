import { useState } from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { HomeCard, BenchCard } from '.';
import { CATEGORIES } from '@common/mocks/category';
import { ENTRIES } from '@common/mocks/user';

export default {
  title: 'TEMPLATE/CARD',
};

export const Home_Card = () => {
  const [isLogin, setIsLogin] = useState(true);
  const nickname = text('nickname', '자양동 꿀주먹');

  const onClickLoginButton = () => setIsLogin(true);
  const onClickLogoutButton = () => setIsLogin(false);

  return (
    <HomeCard
      nickname={isLogin ? nickname : undefined}
      isLogin={isLogin}
      onClickCreateRoomButton={action('create room')}
      onClickJoinRoomButton={action('join room')}
      onClickLoginButton={onClickLoginButton}
      onClickLogoutButton={onClickLogoutButton}
    />
  );
};

export const Bench_Card = () => {
  return (
    <BenchCard
      categories={CATEGORIES}
      entries={ENTRIES}
      startGame={action('start game')}
    />
  );
};
