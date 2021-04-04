import { FC, OptionHTMLAttributes } from 'react';

import Style from './style';

interface BaseOptionProps extends OptionHTMLAttributes<HTMLOptionElement> {}

const BaseOption: FC<BaseOptionProps> = ({ children, ...props }) => {
  return <Style.Option {...props}>{children}</Style.Option>;
};

export default BaseOption;
