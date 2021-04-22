import styled from '@emotion/styled';

import { InputSize } from '../_constant/InputSize';
import { white } from '@common/styles/color';
import { Size } from '@common/enums/size';
import { Align } from '@common/styles/align';
import { getWhiteOpacity } from '@common/styles/opacity';

interface BaseInputStyleProps {
  inputSize?: Size;
  textAlign?: Align;
}

namespace BaseInputStyle {
  export const Input = styled.input<BaseInputStyleProps>`
    height: ${(props) => InputSize[props.inputSize].height};

    font-family: inherit;
    font-size: ${(props) => InputSize[props.inputSize].fontSize};
    line-height: ${(props) => InputSize[props.inputSize].fontSize};
    text-align: ${(props) => props.textAlign};
    color: ${white};

    background: transparent;
    border: none;
    outline: none;
    border-radius: 100px;

    &::placeholder {
      color: ${getWhiteOpacity(50)};
    }
  `;
}

export default BaseInputStyle;
