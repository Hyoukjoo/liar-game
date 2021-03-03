import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import RoomItem from "../components/RoomItem";
import { NavLayout } from "@components/Layout";
import { UnderlineInput } from "@components/Input";
import { IconButton, NormalButton } from "@components/Button";
import { Refresh } from "@components/Icon";

const RoomJoinView: FC = ({}) => {
  const router = useRouter();

  return (
    <NavLayout title='방 참여하기'>
      <Style.Container>
        <Style.SearchBox>
          <UnderlineInput placeholder='방 찾기' />
          <NormalButton>검색</NormalButton>
        </Style.SearchBox>
        <Style.Ul>
          <RoomItem roomName={"test"} ownerName='tester' isPrivate />
          <RoomItem roomName={"test"} ownerName='tester' isPrivate />
          <RoomItem roomName={"test"} ownerName='tester' isSelected />
          <RoomItem roomName={"test"} ownerName='tester' isPrivate />
          <RoomItem roomName={"test"} ownerName='tester' isPrivate />
          <RoomItem roomName={"test"} ownerName='tester' isPrivate isSelected />
        </Style.Ul>
        <Style.Bottom>
          <NormalButton onClick={() => router.push("/room/bench")}>
            참여하기
          </NormalButton>
          <IconButton Svg={Refresh} />
        </Style.Bottom>
      </Style.Container>
    </NavLayout>
  );
};

export default RoomJoinView;
