import { Title } from "@components/Heading";
import { FC } from "react";

import Style from "./style";

interface Props {
  title: string;
}

const NavLayout: FC<Props> = ({ children, title, ...props }) => {
  return (
    <Style.Layout {...props}>
      <Style.Nav>
        <div></div>
        <Title>{title}</Title>
        <div></div>
      </Style.Nav>
      {children}
    </Style.Layout>
  );
};

export default NavLayout;
