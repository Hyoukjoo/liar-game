import React, { FC } from 'react';

import Style from './style';
import { BaseDivProps } from '@atoms/Div/BaseDiv';

export interface BaseLayoutProps extends BaseDivProps {}

const BaseLayout: FC<BaseLayoutProps> = ({ children, ...props }) => {
  return <Style.Layout {...props}>{children}</Style.Layout>;
};

export default BaseLayout;
