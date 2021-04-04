import { FC } from 'react';

import Style from './style';
import { NavLayout } from '@molecules/Layout';
import SignUpForm from '@templates/SignUpForm';

const SignUpView: FC = ({}) => {
  return (
    <NavLayout>
      <SignUpForm />
    </NavLayout>
  );
};

export default SignUpView;
