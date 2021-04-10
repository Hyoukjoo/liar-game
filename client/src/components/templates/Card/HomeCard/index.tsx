import { FC, Fragment } from 'react';

import Style from './style';
import GlassSection from '@atoms/Section/GlassSection';
import { BaseButton } from '@atoms/Button';

export interface HomeCardProps {
  nickname: string;
  onClickCreateRoomButton: () => void;
  onClickJoinRoomButton: () => void;
  isLogin: boolean;
  onClickLoginButton: () => void;
  onClickLogoutButton: () => void;
}

const HomeCard: FC<HomeCardProps> = ({
  nickname,
  onClickCreateRoomButton,
  onClickJoinRoomButton,
  isLogin,
  onClickLoginButton,
  onClickLogoutButton,
}) => {
  return (
    <GlassSection>
      <Style.NickName>{nickname || '로그인이 필요합니다.'}</Style.NickName>
      <Style.ButtonBox>
        {isLogin ? (
          <Fragment>
            <BaseButton onClick={onClickCreateRoomButton}>
              Create Room
            </BaseButton>
            <BaseButton onClick={onClickJoinRoomButton}>Join Room</BaseButton>
            <BaseButton onClick={onClickLogoutButton}>Logout</BaseButton>
          </Fragment>
        ) : (
          <BaseButton onClick={onClickLoginButton}>Login</BaseButton>
        )}
      </Style.ButtonBox>
    </GlassSection>
  );
};

export default HomeCard;
