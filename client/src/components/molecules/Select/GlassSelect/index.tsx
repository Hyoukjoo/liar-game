import { FC, Children, useState, ReactElement } from 'react';

import Style from './style';
import GlassOption, {
  GlassOptionChild,
  GlassOptionProps,
} from '../GlassOption';
import EllipsisLabel from '@atoms/Label/EllipsisLabel';
import { BaseLabelProps } from '@atoms/Label/BaseLabel';

export type Option = Pick<GlassOptionProps, 'children' | 'value'>;

export interface GlassSelectProps {
  onSelect: (value: any) => void;
  children: GlassOptionChild | GlassOptionChild[];
}

const GlassSelect: FC<GlassSelectProps> = ({
  onSelect,
  children,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickSelect = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const onClickOption = (value: any) => {
    setIsOpen(false);
    onSelect(value);
  };

  return (
    <Style.SelectWrapper>
      <Style.Select
        role='menu'
        isOpen={isOpen}
        onClick={onClickSelect}
        {...props}
      >
        {Children.map<ReactElement<BaseLabelProps>, GlassOptionChild>(
          children,
          (child) => {
            if (child.props.isSelected) {
              return <EllipsisLabel>{child.props.children}</EllipsisLabel>;
            }
          }
        )}
      </Style.Select>
      <Style.OptionBox role='select' isOpen={isOpen}>
        {Children.map<GlassOptionChild, GlassOptionChild>(children, (child) => {
          return (
            <GlassOption
              onClick={() => onClickOption(child.props.value)}
              {...child.props}
            >
              {child.props.children}
            </GlassOption>
          );
        })}
      </Style.OptionBox>
    </Style.SelectWrapper>
  );
};

export default GlassSelect;
