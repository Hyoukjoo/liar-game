import React, { useState } from 'react';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { HomeCard, BenchCard, JoinCard } from '.';
import { CATEGORIES } from '@common/mocks/category';
import { ENTRIES } from '@common/mocks/user';
import { ROOMS } from '@common/mocks/room';

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

export const Join_Card = () => {
  const rooms = ROOMS.slice(
    0,
    number('room count', ROOMS.length, {
      min: 1,
      max: ROOMS.length,
      step: 1,
    })
  );

  return (
    <JoinCard
      rooms={rooms}
      searchRoom={action('search')}
      joinRoom={action('join room')}
      refreshRoomList={action('refreshRoom')}
    />
  );
};
