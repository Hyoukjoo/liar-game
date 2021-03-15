import React, { FC } from "react";

import Styled from "./style";

const BaseLayout: FC = ({ children, ...props }) => {
  return <Styled.Layout {...props}>{children}</Styled.Layout>;
};

export default BaseLayout;
