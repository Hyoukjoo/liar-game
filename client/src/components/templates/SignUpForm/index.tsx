import { FC, MouseEvent, useRef } from 'react';

import Style from './style';
import { BaseButton } from '@atoms/Button';
import {
  EmailInput,
  PasswordInput,
  NicknameInput,
} from '@organisms/SignUpForm';
import { ValidateInputRef } from '@organisms/SignUpForm/constant';
import { SignUpBody } from '@services/Auth/RequestBody';

interface SignUpFormProps {
  signUp: (signUpBody: SignUpBody) => Promise<void>;
}

const SignUpForm: FC<SignUpFormProps> = ({ signUp }) => {
  const emailInputRef = useRef<ValidateInputRef>();
  const passwordInputRef = useRef<ValidateInputRef>();
  const nicknameInputRef = useRef<ValidateInputRef>();

  const onClickSignUpButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isEmailValidated = emailInputRef.current.validate();
    const isPasswordValidated = passwordInputRef.current.validate();
    const isNicknameValidated = nicknameInputRef.current.validate();
    const isAllValidated =
      isEmailValidated && isPasswordValidated && isNicknameValidated;

    if (isAllValidated) {
      signUp({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        nickname: nicknameInputRef.current.value,
      });
    }
  };

  return (
    <Style.Section>
      <Style.Form>
        <EmailInput ref={emailInputRef} />
        <PasswordInput ref={passwordInputRef} />
        <NicknameInput ref={nicknameInputRef} />
        <Style.ButtonWrapper>
          <BaseButton type='submit' onClick={onClickSignUpButton}>
            SignUp
          </BaseButton>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Section>
  );
};

export default SignUpForm;
