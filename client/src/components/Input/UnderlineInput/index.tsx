import React, { FC, InputHTMLAttributes } from "react";

import Style from "./style";

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

const UnderlineInput: FC<Props> = ({ ...props }) => {
  return <Style.Input {...props} />;
};

export default UnderlineInput;
