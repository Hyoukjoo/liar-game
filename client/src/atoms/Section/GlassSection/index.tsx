import { FC } from 'react';

import Style from './style';
import { BaseSectionProps } from '../BaseSection';

export interface GlassSectionProps extends BaseSectionProps {}

const GlassSection: FC<GlassSectionProps> = ({ children, ...props }) => {
  return <Style.Section {...props}>{children}</Style.Section>;
};

export default GlassSection;
