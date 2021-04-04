import { FC } from 'react';

import Style from './style';
import { BaseInputProps } from '@atoms/Input/BaseInput';

export interface ValidateInputProps extends BaseInputProps {
  onChangeValue: (value: string) => void;
  validity: boolean;
  message: string;
}

const ValidateInput: FC<ValidateInputProps> = ({
  onChangeValue,
  validity,
  message,
  ...props
}) => {
  return (
    <Style.container>
      <Style.ValidationInput
        validity={validity}
        onChangeValue={onChangeValue}
        {...props}
      />
      {!validity && <Style.Message>{message}</Style.Message>}
    </Style.container>
  );
};

export default ValidateInput;
