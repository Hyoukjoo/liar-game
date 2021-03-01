import React, { FC } from "react";

import Styled from "./style";

const EmptyLayout: FC = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default EmptyLayout;
