import { FC } from "react";

import { BaseDivProps } from "../BaseDiv";
import Style from "./style";

export interface GlassDivProps extends BaseDivProps {}

const GlassDiv: FC<GlassDivProps> = ({ children, ...props }) => {
  return <Style.Div {...props}>{children}</Style.Div>;
};

export default GlassDiv;
