import { FC, MouseEvent, useState } from 'react';

import Style from './style';
import { BaseButton } from '@atoms/Button';
import { BaseInput } from '@atoms/Input';
import { LoginBody } from '@services/Auth/RequestBody';

interface LoginFormProps {
  login: (loginBody: LoginBody) => Promise<void>;
  moveToSignUpPage: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ login, moveToSignUpPage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickLoginButton = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    login({ email, password });
  };

  const onClickSignUpButton = () => {
    moveToSignUpPage();
  };

  return (
    <Style.Section>
      <Style.Form>
        <BaseInput
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChangeValue={setEmail}
        />
        <BaseInput
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChangeValue={setPassword}
        />
        <Style.ButtonWrapper>
          <BaseButton type='submit' onClick={onClickLoginButton}>
            Login
          </BaseButton>
          <BaseButton onClick={onClickSignUpButton}>SignUp</BaseButton>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Section>
  );
};

export default LoginForm;
