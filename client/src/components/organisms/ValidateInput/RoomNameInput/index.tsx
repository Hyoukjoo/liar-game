import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react';

import { roomNameValidate, INVALIDATED_ROOM_NAME_MESSAGE } from './constant';
import { ValidateInputRef } from '../constant';
import ValidateInput from '@molecules/Input/ValidateInput';
import useValidationForm from '@hooks/useValidateForm';

const RoomNameInput: ForwardRefRenderFunction<ValidateInputRef> = (
  props,
  ref
) => {
  const { value, editValue, validate, validity } = useValidationForm(
    roomNameValidate
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
      type='text'
      name='roomName'
      placeholder='room name'
      value={value ?? ''}
      onChangeValue={editValue}
      validity={validity}
      message={INVALIDATED_ROOM_NAME_MESSAGE}
      {...props}
    />
  );
};

export default forwardRef(RoomNameInput);
