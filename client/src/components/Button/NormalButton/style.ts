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

namespace NormalButtonStyle {
  export const Button = styled.button<StyleProps>`
    font-family: inherit;
    font-size: ${({ size }) => ButtonSize[size]};
    height: fit-content;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: gray;
    &:active {
      opacity: 0.8;
    }
  `;

  export const ButtonLabel = styled.label`
    font-size: 1rem;
  `;
}

export default NormalButtonStyle;
