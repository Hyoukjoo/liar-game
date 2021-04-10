import styled from '@emotion/styled';

import { CreateRoomForm, LoginForm, SignUpForm } from '.';
import { LoginBody, SignUpBody } from '@services/Auth/RequestBody';

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

export const Sign_Up_Form = () => {
  const signUp = async (signUpBody: SignUpBody) => {
    const { email, password, nickname } = signUpBody;

    alert(`${email}, ${password}, ${nickname}`);
  };

  return (
    <Layout>
      <SignUpForm signUp={signUp} />
    </Layout>
  );
};

export const Create_Room_Form = () => {
  const createRoom = (roomName: string) => {
    console.log(roomName);
  };

  return <CreateRoomForm createRoom={createRoom} />;
};
