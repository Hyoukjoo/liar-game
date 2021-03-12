import { FC, useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import Style from "./style";
import { NavLayout } from "@components/Layout";
import { UnderlineInput } from "@components/Input";
import { BaseButton } from "@components/Button";
import { Size } from "@common/enums/size";
import useSocket from "@hooks/useSocket";
import { createRoom } from "@services/Room/remotes";
import { deleteUser } from "@services/User/remotes";

const RoomCreateView: FC = ({}) => {
  const router = useRouter();
  const userId = Number(router.query.userId);

  const { socket, roomSocket } = useSocket();

  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    roomSocket?.on("successCreateRoom", console.log);
  }, [roomSocket]);

  const onClickCreateRoomButton = async () => {
    // roomSocket.emit("createRoom", {
    //   userName: router.query.userId,
    //   roomName,
    // });

    const result = await createRoom({ roomName, userId });

    router.push({
      pathname: "/game/bench",
      query: {
        userId,
        roomId: result.id,
      },
    });
  };

  const onClickBackIcon = async () => {
    const result = await deleteUser(userId);

    router.back();
  };

  return (
    <NavLayout title='방 만들기' onClickBackIcon={onClickBackIcon}>
      <Style.Container>
        <Style.InputBox>
          <UnderlineInput
            placeholder='방 이름'
            maxLength={12}
            onChange={(e) => setRoomName(e.target.value)}
          />
        </Style.InputBox>
        <Style.ButtonBox>
          <BaseButton size={Size.MEDIUM} onClick={onClickCreateRoomButton}>
            만들기
          </BaseButton>
        </Style.ButtonBox>
      </Style.Container>
    </NavLayout>
  );
};

export default RoomCreateView;
