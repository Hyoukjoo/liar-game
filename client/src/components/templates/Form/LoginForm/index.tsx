import { FC, MouseEvent, useState } from 'react';

import Style from './style';
import { GlassButton } from '@atoms/Button';
import { GlassInput } from '@atoms/Input';
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
        <GlassInput
          type='email'
          name='email'
          placeholder='email'
          value={email}
          onChangeValue={setEmail}
        />
        <GlassInput
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChangeValue={setPassword}
        />
        <Style.ButtonWrapper>
          <GlassButton type='submit' onClick={onClickLoginButton}>
            Login
          </GlassButton>
          <GlassButton onClick={onClickSignUpButton}>SignUp</GlassButton>
        </Style.ButtonWrapper>
      </Style.Form>
    </Style.Section>
  );
};

export default LoginForm;
