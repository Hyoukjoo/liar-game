import { Children, FC, ReactElement, SelectHTMLAttributes } from 'react';

import Style from './style';
import BaseOption, { BaseOptionProps } from '@atoms/Option/BaseOption';

export type BaseOptionChild = ReactElement<BaseOptionProps>;

export interface BaseSelectProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  children: BaseOptionChild | BaseOptionChild[];
}

const BaseSelect: FC<BaseSelectProps> = ({ children, ...props }) => {
  return (
    <Style.Select {...props}>
      {Children.map<BaseOptionChild, BaseOptionChild>(children, (child) => {
        return <BaseOption {...child.props}>{child.props.children}</BaseOption>;
      })}
    </Style.Select>
  );
};

export default BaseSelect;
