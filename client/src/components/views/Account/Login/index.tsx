import { FC, useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

import { NavLayout } from '@molecules/Layout';
import LoginForm from '@templates/LoginForm';
import useAccount from '@hooks/useAccount';
import { login as loginRequest } from '@services/Auth/remotes';
import { LoginBody } from '@services/Auth/RequestBody';

const LoginView: FC = () => {
  const router = useRouter();
  const { isInit, isLogin } = useAccount();

  useEffect(() => {
    if (isInit && isLogin) {
      alert('이미 로그인 상태입니다.');

      router.replace('/');
    }
  }, [isInit, isLogin]);

  const login = async (loginBody: LoginBody) => {
    const result = await loginRequest(loginBody);

    if (result !== null) {
      router.replace({ pathname: (router.query.exPath as string) || '/' });
    } else {
      alert('이메일 또는 패스워드가 다릅니다.');
    }
  };

  const moveToSignUpPage = () => {
    router.push({ pathname: '/account/signup' });
  };

  return (
    <NavLayout>
      <LoginForm login={login} moveToSignUpPage={moveToSignUpPage} />
    </NavLayout>
  );
};

export default LoginView;
