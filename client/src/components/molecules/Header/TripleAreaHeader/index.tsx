import { ComponentType, FC, HTMLAttributes } from 'react';

import Style from './style';
import { IconButton } from '@molecules/Button';
import { SvgProps } from '@atoms/Icon/Component';
import { Title } from '@atoms/Heading';

export interface TripleAreaHeaderProps extends HTMLAttributes<HTMLElement> {
  title: string;
  leftSideIcon?: ComponentType<SvgProps>;
  onClickLeftSideIcon?: () => void;
  rightSideIcon?: ComponentType<SvgProps>;
  onClickRightSideIcon?: () => void;
}

const TripleAreaHeader: FC<TripleAreaHeaderProps> = ({
  title,
  leftSideIcon = null,
  onClickLeftSideIcon = () => {},
  rightSideIcon = null,
  onClickRightSideIcon = () => {},
  ...props
}) => {
  return (
    <Style.Header {...props}>
      <Style.Area>
        {leftSideIcon !== null && (
          <IconButton
            Svg={leftSideIcon}
            onClick={onClickLeftSideIcon}
            isTransparent
          />
        )}
      </Style.Area>
      <Style.Area>
        <Title>{title}</Title>
      </Style.Area>
      <Style.Area>
        {rightSideIcon !== null && (
          <IconButton
            Svg={rightSideIcon}
            onClick={onClickRightSideIcon}
            isTransparent
          />
        )}
      </Style.Area>
    </Style.Header>
  );
};

export default TripleAreaHeader;
