import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

import { INVALIDATED_NICKNAME_MESSAGE, nicknameValidate } from './constant';
import { ValidateInputRef } from '../constant';
import useValidationForm from '@hooks/useValidateForm';
import ValidateInput from '@molecules/Input/ValidateInput';

const NicknameInput: ForwardRefRenderFunction<ValidateInputRef> = (
  props,
  ref
) => {
  const { value, editValue, validate, validity } = useValidationForm(
    nicknameValidate
  );

  useImperativeHandle(ref, () => ({
    value,
    validate,
  }));

  return (
    <ValidateInput
      type='text'
      name='nickname'
      placeholder='nickname'
      value={value || ''}
      onChangeValue={editValue}
      validity={validity}
      message={INVALIDATED_NICKNAME_MESSAGE}
      {...props}
    />
  );
};

export default forwardRef(NicknameInput);
