import styled from '@emotion/styled';

import { Size } from '@common/enums/size';
import { getBlackOpacity, getWhiteOpacity } from '@common/styles/opacity';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import { InputSize } from '../_constant/InputSize';
import { Align } from '@common/styles/align';

interface StyleProps {
  inputSize?: Size;
  textAlign?: Align;
}

namespace BaseInputStyle {
  export const Input = styled.input<StyleProps>`
    ${getGlassMorphismStyle};

    padding: 10px 20px 14px;
    width: 100%;
    height: ${(props) => InputSize[props.inputSize].height};
    border-radius: 100px;

    font-family: NotoSans;
    font-size: ${(props) => InputSize[props.inputSize].fontSize};
    line-height: ${(props) => InputSize[props.inputSize].fontSize};
    text-align: ${(props) => props.textAlign};

    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:focus {
      background: ${getWhiteOpacity(10)};
      box-shadow: 4px 4px 20px 4px ${getBlackOpacity(20)};
    }

    &:hover {
      background: ${getWhiteOpacity(10)};
      box-shadow: 4px 4px 20px 1px ${getBlackOpacity(20)};
    }

    &::-webkit-input-placeholder {
      font-family: inherit;
      color: ${getWhiteOpacity(50)};
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      transition: background-color 50000s ease-in-out 0s;
      -webkit-text-fill-color: #fff !important;
    }
  `;
}

export default BaseInputStyle;
