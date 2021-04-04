import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

import { ValidateInputRef } from '..';
import { passwordValidate, INVALIDATED_PASSWORD_MESSAGE } from './constant';
import useValidationForm from '@hooks/useValidateForm';
import ValidateInput from '@molecules/Input/ValidateInput';

const PasswordInput: ForwardRefRenderFunction<ValidateInputRef> = (
  props,
  ref
) => {
  const { value, editValue, validate, validity } = useValidationForm(
    passwordValidate
  );

  useImperativeHandle(
    ref,
    () => ({
      value,
      validate,
    }),
    [value, validity]
  );

  return (
    <ValidateInput
      type='password'
      name='password'
      placeholder='password'
      value={value ?? ''}
      onChangeValue={editValue}
      validity={validity}
      message={INVALIDATED_PASSWORD_MESSAGE}
      {...props}
    />
  );
};

export default forwardRef(PasswordInput);
