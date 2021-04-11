import styled from '@emotion/styled';

import { getBackgroundStyle } from './background';

namespace CommonStoryBookStyle {
  export const GlassLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100vw;
    height: 100vh;
    ${getBackgroundStyle};
    box-sizing: border-box;
  `;
}

export default CommonStoryBookStyle;
