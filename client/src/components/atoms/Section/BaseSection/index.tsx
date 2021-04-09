import { FC, HTMLAttributes } from 'react';

import Style from './style';

export interface BaseSectionProps extends HTMLAttributes<HTMLElement> {}

const BaseSection: FC<BaseSectionProps> = ({ children, ...props }) => {
  return <Style.Section {...props}>{children}</Style.Section>;
};

export default BaseSection;
