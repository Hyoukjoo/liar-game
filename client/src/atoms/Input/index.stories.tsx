import { FC } from "react";

import { yellow } from "@common/styles/color";
import styled from "@emotion/styled";
import { BaseInput, TextInput } from ".";

export default {
  title: "Atom/Input",
};

const Layout = styled.div`
  padding: 1rem;
  height: 100vh;
  background-color: ${yellow};
`;

export const Base_Input: FC = () => {
  return (
    <Layout>
      <BaseInput />
    </Layout>
  );
};

export const Text_Input: FC = () => {
  return (
    <Layout>
      <TextInput />
    </Layout>
  );
};
