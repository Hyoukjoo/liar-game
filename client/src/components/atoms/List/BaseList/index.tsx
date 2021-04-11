import { FC, HTMLAttributes } from 'react';

import Style from './style';

export interface BaseListProps extends HTMLAttributes<HTMLUListElement> {}

const BaseList: FC<BaseListProps> = ({ children, ...props }) => {
  return <Style.List {...props}>{children}</Style.List>;
};

export default BaseList;
