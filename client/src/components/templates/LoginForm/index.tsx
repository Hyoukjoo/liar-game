import { FC, MouseEvent, useState } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { BaseButton } from '@atoms/Button';
import { BaseInput } from '@atoms/Input';
import { login } from '@services/Auth/remotes';

const LoginForm: FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickLoginButton = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const result = await login({
      email,
      password,
    });

    if (result !== null) {
      router.replace({ pathname: '/' });
    } else {
      alert('이메일 또는 패스워드가 다릅니다.');
    }
  };

  const onClickSignUpButton = () => {
    router.push({ pathname: '/account/signup' });
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
