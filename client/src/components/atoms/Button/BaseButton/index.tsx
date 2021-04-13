import { ButtonHTMLAttributes, FC } from 'react';

import Style from './style';
import { Size } from '@common/enums/size';

export interface BaseButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const BaseButton: FC<BaseButtonProps> = ({
  type = 'button',
  size = Size.MEDIUM,
  children,
  ...props
}) => {
  return (
    <Style.Button size={size} type={type} {...props}>
      {children}
    </Style.Button>
  );
};

export default BaseButton;
