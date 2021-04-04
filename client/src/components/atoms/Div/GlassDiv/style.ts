import styled from '@emotion/styled';

import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import BaseDiv from '../BaseDiv';

namespace GlassDivStyle {
  export const Div = styled(BaseDiv)`
    ${getGlassMorphismStyle};
  `;
}

export default GlassDivStyle;
