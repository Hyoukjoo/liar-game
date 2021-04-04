import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

import Style from './style';

export interface BaseSectionProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {}

const BaseSection: FC<BaseSectionProps> = ({ children, ...props }) => {
  return <Style.Section {...props}>{children}</Style.Section>;
};

export default BaseSection;
