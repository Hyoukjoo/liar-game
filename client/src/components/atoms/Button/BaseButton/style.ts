import styled from '@emotion/styled';

import { Size } from '@common/enums/size';
import { ButtonSize } from '../_constant/ButtonSize';

interface GlassButtonStyleProps {
  size: Size;
}

namespace BaseButtonStyle {
  export const Button = styled.button<GlassButtonStyleProps>`
    height: ${({ size }) => ButtonSize[size].height};

    font-family: inherit;
    font-size: ${({ size }) => ButtonSize[size].fontSize};
    line-height: ${({ size }) => ButtonSize[size].fontSize};

    background: transparent;
    border: none;
    outline: none;

    cursor: pointer;
  `;
}

export default BaseButtonStyle;
