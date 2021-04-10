import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { HomeCard } from '@templates/Card';
import useAccount from '@hooks/useAccount';

const HomeView: FC = ({}) => {
  const router = useRouter();
  const { account, logout, isLogin, isInit } = useAccount();

  const onClickLogoutButton = () => {
    logout();
  };

  const onClickLoginButton = () => {
    router.push({
      pathname: '/account/login',
      query: { exPath: router.pathname },
    });
  };

  const onClickCreateRoomButton = () => {
    router.push({
      pathname: '/room/create',
    });
  };

  const onClickJoinRoomButton = () => {
    router.push({
      pathname: '/room/join',
    });
  };

  return (
    <Style.HomeLayout>
      <Style.GameName>Liar Game</Style.GameName>
      {isInit && (
        <HomeCard
          nickname={account?.nickname}
          onClickCreateRoomButton={onClickCreateRoomButton}
          onClickJoinRoomButton={onClickJoinRoomButton}
          isLogin={isLogin}
          onClickLoginButton={onClickLoginButton}
          onClickLogoutButton={onClickLogoutButton}
        />
      )}
    </Style.HomeLayout>
  );
};

export default HomeView;
