import styled from "@emotion/styled";

import { getGlassMorphismStyle } from "@common/styles/glassmorphism";
import { getWhiteOpacity } from "@common/styles/opacity";
import BaseDiv from "../BaseDiv";

namespace GlassDivStyle {
  export const Div = styled(BaseDiv)`
    ${getGlassMorphismStyle};
    background: ${getWhiteOpacity(5)};
  `;
}

export default GlassDivStyle;
