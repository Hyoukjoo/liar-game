import { Validate } from '@hooks/useValidateForm';

export const passwordValidate: Validate = (value: string = '') => {
  const regex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  return regex.test(value);
};

export const INVALIDATED_PASSWORD_MESSAGE =
  '영문과 특수문자를 포함 8자 이상, 15자 이하입니다.';
