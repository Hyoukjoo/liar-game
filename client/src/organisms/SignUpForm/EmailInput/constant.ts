import { Validate } from '@hooks/useValidateForm';

export const emailValidate: Validate = (value: string = '') => {
  const regex = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return regex.test(value);
};

export const INVALIDATED_EMAIL_MESSAGE = '이메일 형식이 틀립니다.';
