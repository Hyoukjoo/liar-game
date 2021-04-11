import styled from '@emotion/styled';

import BaseList from '../BaseList';
import { getGlassMorphismStyle } from '@common/styles/glassmorphism';

namespace GlassListStyle {
  export const List = styled(BaseList)`
    ${getGlassMorphismStyle};
  `;
}

export default GlassListStyle;
