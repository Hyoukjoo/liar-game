import { FC } from 'react';
import { BaseItemProps } from '../BaseItem';

import Style from './style';

const GlassItem: FC<BaseItemProps> = ({ children, ...props }) => {
  return <Style.Item {...props}>{children}</Style.Item>;
};

export default GlassItem;
