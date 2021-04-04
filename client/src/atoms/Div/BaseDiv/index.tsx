import { FC, HTMLAttributes } from 'react';

import Style from './style';

export interface BaseDivProps extends HTMLAttributes<HTMLDivElement> {}

const BaseDiv: FC<BaseDivProps> = ({ children, ...props }) => {
  return <Style.Div {...props}>{children}</Style.Div>;
};

export default BaseDiv;
