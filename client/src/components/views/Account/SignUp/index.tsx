import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { HeaderLayout } from '@templates/Layout';
import SignUpForm from '@templates/Form/SignUpForm';
import { signUp as SignUpRequest } from '@services/Auth/remotes';
import { SignUpBody } from '@services/Auth/RequestBody';

const SignUpView: FC = () => {
  const router = useRouter();

  const signUp = async (signUpBody: SignUpBody) => {
    const result = await SignUpRequest(signUpBody);

    if (result !== null) {
      router.replace({ pathname: '/account/login' });
    } else {
      alert('error;;');
    }
  };

  return (
    <HeaderLayout title='회원가입'>
      <SignUpForm signUp={signUp} />
    </HeaderLayout>
  );
};

export default SignUpView;
