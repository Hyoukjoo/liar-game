import styled from '@emotion/styled';

import { BaseItem } from '../';
import { getWhiteOpacity } from '@common/styles/opacity';

namespace GlassItemStyle {
  export const Item = styled(BaseItem)`
    border-bottom: 1px solid ${getWhiteOpacity(20)};

    &:last-of-type {
      border-bottom: none;
    }
  `;
}

export default GlassItemStyle;
