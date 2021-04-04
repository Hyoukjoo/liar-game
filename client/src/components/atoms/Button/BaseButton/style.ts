import styled from '@emotion/styled';

import { Size } from '@common/enums/size';
import { getBlackOpacity, getWhiteOpacity } from '@common/styles/opacity';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import { ButtonSize } from '../_constant/ButtonSize';

interface StyleProps {
  size: Size;
}

namespace BaseButtonStyle {
  export const Button = styled.button<StyleProps>`
    ${getGlassMorphismStyle};

    padding: 10px 20px 14px;
    width: max-content;
    height: ${({ size }) => ButtonSize[size].height};

    font-family: NotoSans;
    font-size: ${({ size }) => ButtonSize[size].fontSize};
    line-height: ${({ size }) => ButtonSize[size].fontSize};

    border-radius: 100px;
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    cursor: pointer;

    &:hover {
      background: ${getWhiteOpacity(10)};
      box-shadow: 4px 4px 20px 1px ${getBlackOpacity(20)};
    }

    &:active {
      box-shadow: inset 4px 4px 20px 0px ${getBlackOpacity(20)};
    }
  `;
}

export default BaseButtonStyle;
