import { FC, SelectHTMLAttributes } from 'react';

import Style from './style';

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {}

const BaseSelect: FC<Props> = ({ children, ...props }) => {
  return <Style.Select {...props}>{children}</Style.Select>;
};

export default BaseSelect;
