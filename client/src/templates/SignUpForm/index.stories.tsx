import styled from '@emotion/styled';
import SignUpForm from '.';

export default {
  title: 'TEMPLATE/FORM',
};

const Layout = styled.div`
  width: 100%;
  max-width: 375px;
`;

export const Sign_Up_Form = () => {
  return (
    <Layout>
      <SignUpForm />
    </Layout>
  );
};
