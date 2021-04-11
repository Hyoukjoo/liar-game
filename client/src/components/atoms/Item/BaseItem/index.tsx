import { FC, LiHTMLAttributes } from 'react';

import Style from './style';

export interface BaseItemProps extends LiHTMLAttributes<HTMLLIElement> {}

const BaseItem: FC<BaseItemProps> = ({ children, ...props }) => {
  return <Style.Item {...props}>{children}</Style.Item>;
};

export default BaseItem;
