import styled from '@emotion/styled';

import { getWhiteOpacity } from '@common/styles/opacity';

interface GlassOptionStyleProps {
  isSelected?: boolean;
}

namespace GlassOptionStyle {
  export const Option = styled.li<GlassOptionStyleProps>`
    padding: 10px 15px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${getWhiteOpacity(20)};

    &:last-of-type {
      border-bottom: none;
    }
  `;
}

export default GlassOptionStyle;
