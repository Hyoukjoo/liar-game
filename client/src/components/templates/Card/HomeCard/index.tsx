import { FC, Fragment } from 'react';

import Style from './style';
import { GlassSection } from '@atoms/Section';
import { GlassButton } from '@atoms/Button';

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
            <GlassButton onClick={onClickCreateRoomButton}>
              Create Room
            </GlassButton>
            <GlassButton onClick={onClickJoinRoomButton}>Join Room</GlassButton>
            <GlassButton onClick={onClickLogoutButton}>Logout</GlassButton>
          </Fragment>
        ) : (
          <GlassButton onClick={onClickLoginButton}>Login</GlassButton>
        )}
      </Style.ButtonBox>
    </GlassSection>
  );
};

export default HomeCard;
