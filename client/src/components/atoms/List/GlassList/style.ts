import styled from '@emotion/styled';

import BaseList from '../BaseList';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';

namespace GlassListStyle {
  export const List = styled(BaseList)`
    ${getGlassMorphismStyle};
    min-height: 175px;
    max-height: 225px;
  `;
}

export default GlassListStyle;
