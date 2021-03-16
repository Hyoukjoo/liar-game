import { Size } from "@common/enums/size";
import { white } from "@common/styles/color";
import { getGlassMorphismStyle } from "@common/styles/glassmorphism";
import styled from "@emotion/styled";
import { InputSize } from "../_constant/InputSize";

interface StyleProps {
  inputSize?: Size;
  textAlign?: Align;
}

namespace BaseInputStyle {
  export const Input = styled.input<StyleProps>`
    ${getGlassMorphismStyle};

    padding: 5px 10px;
    width: 100%;
    height: ${(props) => InputSize[props.inputSize].height};
    font-family: NotoSans;
    font-size: ${(props) => InputSize[props.inputSize].fontSize};
    text-align: ${(props) => props.textAlign};

    &::-webkit-input-placeholder {
      font-family: inherit;
      color: ${white};
    }
  `;
}

export default BaseInputStyle;
