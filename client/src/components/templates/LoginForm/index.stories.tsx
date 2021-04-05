import styled from '@emotion/styled';

import LoginForm from '.';
import { LoginBody } from '@services/Auth/RequestBody';

export default {
  title: 'TEMPLATE/FORM',
};

const Layout = styled.div`
  width: 100%;
  max-width: 375px;
`;

export const Login_Form = () => {
  const login = async (loginBody: LoginBody) => {
    alert(`${loginBody.email}, ${loginBody.password}`);
  };

  const moveToSignUpPage = () => {};

  return (
    <Layout>
      <LoginForm login={login} moveToSignUpPage={moveToSignUpPage} />
    </Layout>
  );
};
