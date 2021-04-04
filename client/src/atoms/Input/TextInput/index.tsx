import { FC } from 'react';
import { BaseInputProps } from '../BaseInput';

import Style from './style';

interface TextInputProps extends BaseInputProps {}

const TextInput: FC<TextInputProps> = ({ ...props }) => {
  return <Style.Input type='text' {...props} />;
};

export default TextInput;
