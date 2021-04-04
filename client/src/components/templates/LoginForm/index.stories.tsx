import styled from '@emotion/styled';
import LoginForm from '.';

export default {
  title: 'TEMPLATE/FORM',
};

const Layout = styled.div`
  width: 100%;
  max-width: 375px;
`;

export const Login_Form = () => {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};
