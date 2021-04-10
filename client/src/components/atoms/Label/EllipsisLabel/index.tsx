import { FC } from 'react';

import Style from './style';
import { BaseLabelProps } from '../BaseLabel';

const EllipsisLabel: FC<BaseLabelProps> = ({ children, ...props }) => {
  return <Style.Label {...props}>{children}</Style.Label>;
};

export default EllipsisLabel;
