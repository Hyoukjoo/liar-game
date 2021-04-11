import { FC } from 'react';

import Style from './style';
import { BaseListProps } from '../BaseList';

const GlassList: FC<BaseListProps> = ({ children, ...props }) => {
  return <Style.List {...props}>{children}</Style.List>;
};

export default GlassList;
