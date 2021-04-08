import { Validate } from '@hooks/useValidateForm';

export const roomNameValidate: Validate = (value: string = '') => {
  const trimedValue = value.trim();

  return trimedValue.length > 2 && trimedValue.length <= 20;
};

export const INVALIDATED_ROOM_NAME_MESSAGE = '3자 이상 20자 이하입니다.';
