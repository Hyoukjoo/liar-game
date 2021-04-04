import { FC, MouseEvent, useRef } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { BaseButton } from '@atoms/Button';
import { signup } from '@services/Auth/remotes';
import {
  EmailInput,
  PasswordInput,
  NicknameInput,
  ValidateInputRef,
} from '@organisms/SignUpForm';

const SignUpForm: FC = () => {
  const router = useRouter();

  const emailInputRef = useRef<ValidateInputRef>();
  const passwordInputRef = useRef<ValidateInputRef>();
  const nicknameInputRef = useRef<ValidateInputRef>();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const isEmailValidated = emailInputRef.current.validate();
    const isPasswordValidated = passwordInputRef.current.validate();
    const isNicknameValidated = nicknameInputRef.current.validate();
    const isAllValidated =
      isEmailValidated && isPasswordValidated && isNicknameValidated;

    if (isAllValidated) {
      const result = await signup({
        email: emailInputRef.current.value,
        password: passwordInputRef.current.value,
        nickname: nicknameInputRef.current.value,
      });

      if (result !== null) {
        router.replace({ pathname: '/' });
      } else {
        alert('error;;');
      }
    }
  };

  return (
    <Style.Section>
      <Style.Form>
        <EmailInput ref={emailInputRef} />
        <PasswordInput ref={passwordInputRef} />
        <NicknameInput ref={nicknameInputRef} />
        <Style.ButtonWrapper>
          <BaseButton type='submit' onClick={handleSubmit}>
            SignUp
          </BaseButton>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Section>
  );
};

export default SignUpForm;
