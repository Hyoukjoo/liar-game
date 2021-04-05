import styled from '@emotion/styled';

import SignUpForm from '.';
import { SignUpBody } from '@services/Auth/RequestBody';

export default {
  title: 'TEMPLATE/FORM',
};

const Layout = styled.div`
  width: 100%;
  max-width: 375px;
`;

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
