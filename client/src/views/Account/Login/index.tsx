import { FC } from 'react';

import { NavLayout } from '@molecules/Layout';
import LoginForm from '@templates/LoginForm';

const LoginView: FC = () => {
  return (
    <NavLayout>
      <LoginForm />
    </NavLayout>
  );
};

export default LoginView;
