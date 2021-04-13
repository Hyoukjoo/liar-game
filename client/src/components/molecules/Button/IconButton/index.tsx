import { FC } from 'react';

import Style from './style';
import { white } from '@common/styles/color';
import { SvgComponent } from '@atoms/Icon/Component';
import { BaseButtonProps } from '@atoms/Button/BaseButton';

interface IconButtonProps extends BaseButtonProps {
  Svg: SvgComponent;
  width?: string;
  height?: string;
  iconColor?: string;
  isTransparent?: boolean;
}

const IconButton: FC<IconButtonProps> = ({
  Svg,
  width = '24px',
  height = '24px',
  iconColor = white,
  isTransparent,
  ...props
}) => {
  return (
    <Style.Button
      width={width}
      height={height}
      isTransparent={isTransparent}
      {...props}
    >
      <Style.LabelIcon
        className='icon'
        Svg={Svg}
        width={width}
        height={height}
        color={iconColor}
      />
    </Style.Button>
  );
};

export default IconButton;
