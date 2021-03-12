import { FC, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { UnderlineInput } from "@components/Input";
import { BaseButton } from "@components/Button";
import { createUser } from "../../services/User/remotes";

const Home: FC = ({}) => {
  const router = useRouter();

  const [userName, setUserName] = useState("");

  const onClickCreateRoomButton = async () => {
    const result = await createUser(userName);

    if (result === null) {
      alert("이미 존재하는 이름");
    } else {
      router.push({
        pathname: `/room/create`,
        query: {
          userId: result.id,
        },
      });
    }
  };

  const onClickJoinRoomButton = async () => {
    const result = await createUser(userName);

    router.push({
      pathname: "/room/join",
      query: {
        userId: result.id,
      },
    });
  };

  return (
    <Style.HomeLayout>
      <Style.Title>라이어 게임</Style.Title>
      <Style.InputBox>
        <UnderlineInput
          placeholder='이름 입력'
          maxLength={12}
          onChange={(e) => setUserName(e.target.value)}
        />
      </Style.InputBox>
      <Style.ButtonBox>
        <BaseButton onClick={onClickCreateRoomButton}>방 만들기</BaseButton>
        <BaseButton onClick={onClickJoinRoomButton}>방 참여하기</BaseButton>
      </Style.ButtonBox>
    </Style.HomeLayout>
  );
};

export default Home;
