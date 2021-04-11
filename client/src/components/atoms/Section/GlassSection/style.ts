import styled from '@emotion/styled';

import { getGlassMorphismStyle } from '@common/styles/glassmorphism';
import BaseSection from '../BaseSection';

namespace GlassSectionStyle {
  export const Section = styled(BaseSection)`
    ${getGlassMorphismStyle};
    backdrop-filter: none;
  `;
}

export default GlassSectionStyle;
