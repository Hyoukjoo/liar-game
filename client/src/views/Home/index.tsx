import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { UnderlineInput } from "@components/Input";
import { NormalButton } from "@components/Button";

const Home: FC = ({}) => {
  const router = useRouter();

  return (
    <Style.HomeLayout>
      <Style.Title>라이어 게임</Style.Title>
      <Style.InputBox>
        <UnderlineInput placeholder='이름 입력' maxLength={12} />
      </Style.InputBox>
      <Style.ButtonBox>
        <NormalButton onClick={() => router.push("/room/create")}>
          방 만들기
        </NormalButton>
        <NormalButton>방 참여하기</NormalButton>
      </Style.ButtonBox>
    </Style.HomeLayout>
  );
};

export default Home;
