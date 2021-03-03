import { FC } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { NavLayout } from "@components/Layout";
import EntryItem from "../components/EntryItem";
import { NormalButton } from "@components/Button";

const RoomBenchView: FC = ({}) => {
  const router = useRouter();

  return (
    <NavLayout title='대기실'>
      <Style.Container>
        <Style.EntryList>참여자</Style.EntryList>
        <Style.Ul>
          <EntryItem entryName='짱구' isOwner />
          <EntryItem entryName='철수' />
          <EntryItem entryName='유리' />
        </Style.Ul>
        <Style.Bottom>
          <NormalButton onClick={() => router.push("/play")}>
            시작하기
          </NormalButton>
        </Style.Bottom>
      </Style.Container>
    </NavLayout>
  );
};

export default RoomBenchView;
