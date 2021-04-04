import { Validate } from '@hooks/useValidateForm';

export const nicknameValidate: Validate = (value: string = '') => {
  return value.trim().length > 0;
};

export const INVALIDATED_NICKNAME_MESSAGE = '닉네임은 필수입니다.';
