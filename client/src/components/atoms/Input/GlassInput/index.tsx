import { FC } from 'react';

import Style from './style';
import { BaseInputProps } from '../BaseInput';

const GlassInput: FC<BaseInputProps> = ({ ...props }) => {
  return <Style.Input {...props} />;
};

export default GlassInput;
