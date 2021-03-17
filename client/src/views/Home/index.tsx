import { FC, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { TextInput } from "@atoms/Input";
import { BaseButton } from "@atoms/Button";
import { Title } from "@atoms/Heading";
import { signup } from "@services/Auth/remotes";

const Home: FC = ({}) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onClickCreateRoomButton = async () => {
    // const result = await signup({ email, password, nickname });
    // if (result === null) {
    //   alert("이미 존재하는 이름");
    // } else {
    //   router.push({
    //     pathname: `/room/create`,
    //     query: {
    //       userId: result.id,
    //     },
    //   });
    // }
  };

  const onClickJoinRoomButton = async () => {
    // const result = await signup({ email, password, nickname });
    // router.push({
    //   pathname: "/room/join",
    //   query: {
    //     userId: result.id,
    //   },
    // });
  };

  return (
    <Style.HomeLayout>
      <Style.Container>
        <Title>라이어 게임</Title>
        <Style.InputBox>
          <TextInput
            placeholder='이름 입력'
            maxLength={12}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Style.InputBox>
        <Style.ButtonBox>
          <BaseButton onClick={onClickCreateRoomButton}>방 만들기</BaseButton>
          <BaseButton onClick={onClickJoinRoomButton}>참여하기</BaseButton>
        </Style.ButtonBox>
      </Style.Container>
    </Style.HomeLayout>
  );
};

export default Home;
