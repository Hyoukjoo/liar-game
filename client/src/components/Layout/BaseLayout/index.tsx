import React, { FC } from "react";

import Styled from "./style";

const BaseLayout: FC = ({ children, ...props }) => {
  return <Styled.Container {...props}>{children}</Styled.Container>;
};

export default BaseLayout;
