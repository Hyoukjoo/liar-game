import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import { NavLayout } from '@molecules/Layout';
import SignUpForm from '@templates/SignUpForm';
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
    <NavLayout>
      <SignUpForm signUp={signUp} />
    </NavLayout>
  );
};

export default SignUpView;
