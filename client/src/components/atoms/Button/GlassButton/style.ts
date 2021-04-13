import styled from '@emotion/styled';

import BaseButton from '../BaseButton';
import { getBlackOpacity, getWhiteOpacity } from '@common/styles/opacity';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';

namespace GlassButtonStyle {
  export const Button = styled(BaseButton)`
    ${getGlassMorphismStyle};

    padding: 10px 20px 14px;
    width: max-content;

    border-radius: 100px;
    transition: background 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    &:hover {
      background: ${getWhiteOpacity(20)};
      box-shadow: 4px 4px 20px 1px ${getBlackOpacity(20)};
    }

    &:active {
      box-shadow: inset 4px 4px 20px 0px ${getBlackOpacity(20)};
    }
  `;
}

export default GlassButtonStyle;
