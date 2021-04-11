import { FC, LiHTMLAttributes, ReactElement } from 'react';

import Style from './style';
import EllipsisLabel from '@atoms/Label/EllipsisLabel';

export interface GlassOptionProps extends LiHTMLAttributes<HTMLLIElement> {
  isSelected: boolean;
  children: string;
}

export type GlassOptionChild = ReactElement<GlassOptionProps>;

const GlassOption: FC<GlassOptionProps> = ({
  isSelected,
  children,
  ...props
}) => {
  return (
    <Style.Option role='option' isSelected={isSelected} {...props}>
      <EllipsisLabel>{children}</EllipsisLabel>
    </Style.Option>
  );
};

export default GlassOption;
