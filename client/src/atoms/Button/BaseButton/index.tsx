import { Size } from '@common/enums/size';
import React, { ButtonHTMLAttributes, FC } from 'react';

import Styled from './style';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const BaseButton: FC<Props> = ({
  size = Size.MEDIUM,
  type = 'button',
  children,
  ...props
}) => {
  return (
    <Styled.Button size={size} type={type} {...props}>
      {children}
    </Styled.Button>
  );
};

export default BaseButton;
