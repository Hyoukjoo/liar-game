import styled from '@emotion/styled';

import { Size } from '@common/enums/size';
import { getBlackOpacity, getWhiteOpacity } from '@common/styles/opacity';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import { InputSize } from '../_constant/InputSize';
import { Align } from '@common/styles/align';
import BaseInput from '../BaseInput';

interface StyleProps {
  inputSize?: Size;
  textAlign?: Align;
}

namespace GlassInputStyle {
  export const Input = styled(BaseInput)<StyleProps>`
    ${getGlassMorphismStyle};

    padding: 10px 20px 14px;
    width: 100%;

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

export default GlassInputStyle;
