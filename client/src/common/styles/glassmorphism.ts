import { css } from "@emotion/react";
import { white } from "./color";
import { getBlackOpacity, getWhiteOpacity } from "./opacity";

export const getGlassMorphismStyle = () => css`
  color: ${white};
  background: transparent;
  box-shadow: 4px 4px 20px 0px ${getBlackOpacity(10)};
  border: none;
  border-top: 1px solid ${getWhiteOpacity(50)};
  border-left: 1px solid ${getWhiteOpacity(50)};
  backdrop-filter: blur(5px);
  border-radius: 2px;
  outline: none;
`;
