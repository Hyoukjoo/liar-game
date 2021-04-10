import { FC, LabelHTMLAttributes } from 'react';

import Style from './style';

export interface BaseLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const BaseLabel: FC<BaseLabelProps> = ({ children, ...props }) => {
  return <Style.Label {...props}>{children}</Style.Label>;
};

export default BaseLabel;
