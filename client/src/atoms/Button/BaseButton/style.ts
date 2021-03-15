import { Size } from "@common/enums/size";
import styled from "@emotion/styled";

interface StyleProps {
  size: Size;
}

const ButtonSize = {
  [Size.SMALL]: "1rem",
  [Size.MEDIUM]: "1.5rem",
  [Size.LARGE]: "2rem",
};

namespace BaseButtonStyle {
  export const Button = styled.button<StyleProps>`
    font-family: inherit;
    font-size: ${({ size }) => ButtonSize[size]};
    width: max-content;
    height: fit-content;
    padding: 10px 20px;
    border-radius: 5px;
    background-color: gray;
    &:active {
      opacity: 0.8;
    }
  `;
}

export default BaseButtonStyle;
