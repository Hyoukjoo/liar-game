import { FC } from 'react';

import Styled from './style';
import { BaseButtonProps } from '../BaseButton';

const GlassButton: FC<BaseButtonProps> = ({ children, ...props }) => {
  return <Styled.Button {...props}>{children}</Styled.Button>;
};

export default GlassButton;
