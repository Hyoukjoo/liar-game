import { FC, LiHTMLAttributes } from 'react';

import Style from './style';
import Icon from '@atoms/Icon/Component';
import { Lock } from '@atoms/Icon';

interface Props extends LiHTMLAttributes<HTMLLIElement> {
  roomName: string;
  ownerName: string;
  isPrivate?: boolean;
  isSelected?: boolean;
}

const RoomItem: FC<Props> = ({
  roomName,
  ownerName,
  isPrivate,
  isSelected,
  ...props
}) => {
  return (
    <Style.Item isSelected={isSelected} {...props}>
      <Style.LeftSide>
        <Style.RoomName>{roomName}</Style.RoomName>
        <Style.OwnerName>{ownerName}</Style.OwnerName>
      </Style.LeftSide>
      <Style.RightSide>
        {isPrivate && <Icon Svg={Lock} width='24px' height='24px' />}
      </Style.RightSide>
    </Style.Item>
  );
};

export default RoomItem;
