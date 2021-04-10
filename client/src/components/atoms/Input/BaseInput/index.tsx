import { ChangeEvent, FC, InputHTMLAttributes } from 'react';

import Style from './style';
import { Size } from '@common/enums/size';
import { Align } from '@common/styles/align';

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize?: Size;
  textAlign?: Align;
  onChangeValue?: (value: string) => void;
}

const BaseInput: FC<BaseInputProps> = ({
  inputSize = Size.MEDIUM,
  textAlign,
  onChangeValue,
  onChange,
  ...props
}) => {
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeValue?.(e.target.value);
    onChange?.(e);
  };

  return (
    <Style.Input
      textAlign={textAlign}
      inputSize={inputSize}
      onChange={onChangeInput}
      {...props}
    />
  );
};

export default BaseInput;
