import React, { FC } from "react";
import { NormalButton } from "src/components/Button";
import EmptyLayout from "src/components/Layout/EmptyLayout";

import Styled from "./style";

const Home: FC = ({}) => {
  return (
    <EmptyLayout>
      <Styled.ButtonBox>
        <NormalButton>방 만들기</NormalButton>
        <NormalButton>방 참여하기</NormalButton>
      </Styled.ButtonBox>
    </EmptyLayout>
  );
};

export default Home;
