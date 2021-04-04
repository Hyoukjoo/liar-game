export { default as EmailInput } from './EmailInput';
export { default as PasswordInput } from './PasswordInput';
export { default as NicknameInput } from './NicknameInput';

export type ValidateInputRef = {
  value: string;
  validate: () => boolean;
};
