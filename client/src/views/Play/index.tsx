import { NavLayout } from "@components/Layout";
import { FC } from "react";

import Style from "./style";

const PlayView: FC = ({}) => {
  return (
    <NavLayout title='플레이'>
      <Style.Container></Style.Container>
    </NavLayout>
  );
};

export default PlayView;
