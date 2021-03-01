import { Size } from "@common/enums/size";
import React, { ButtonHTMLAttributes, FC } from "react";

import Styled from "./style";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size;
}

const NormalButton: FC<Props> = ({ size = Size.SMALL, children, ...props }) => {
  return (
    <Styled.Button size={size} {...props}>
      {children}
    </Styled.Button>
  );
};

export default NormalButton;
