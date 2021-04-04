import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

import { emailValidate, INVALIDATED_EMAIL_MESSAGE } from './constant';
import { ValidateInputRef } from '..';
import useValidationForm from '@hooks/useValidateForm';
import ValidateInput from '@molecules/Input/ValidateInput';

const EmailInput: ForwardRefRenderFunction<ValidateInputRef> = (props, ref) => {
  const { value, editValue, validate, validity } = useValidationForm(
    emailValidate
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
      type='email'
      name='email'
      placeholder='email'
      value={value ?? ''}
      onChangeValue={editValue}
      validity={validity}
      message={INVALIDATED_EMAIL_MESSAGE}
      {...props}
    />
  );
};

export default forwardRef(EmailInput);
