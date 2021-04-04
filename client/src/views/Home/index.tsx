import { FC } from 'react';
import { useRouter } from 'next/dist/client/router';

import Style from './style';
import LoginForm from '@templates/LoginForm';

const Home: FC = ({}) => {
  const router = useRouter();

  return (
    <Style.HomeLayout>
      <LoginForm />
    </Style.HomeLayout>
  );
};

export default Home;
