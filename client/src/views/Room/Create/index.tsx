import { FC } from "react";

import Style from "./style";
import { NavLayout } from "@components/Layout";
import { UnderlineInput } from "@components/Input";
import { NormalButton } from "@components/Button";
import { Size } from "@common/enums/size";

const RoomCreateView: FC = ({}) => {
  return (
    <NavLayout title='방 만들기'>
      <Style.Container>
        <Style.InputBox>
          <UnderlineInput placeholder='방 이름' maxLength={12} />
        </Style.InputBox>
        <Style.ButtonBox>
          <NormalButton size={Size.MEDIUM}>만들기</NormalButton>
        </Style.ButtonBox>
      </Style.Container>
    </NavLayout>
  );
};

export default RoomCreateView;
