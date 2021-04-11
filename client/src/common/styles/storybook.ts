import styled from '@emotion/styled';
import { background1, background2, background3, white } from './color';

namespace CommonStoryBookStyle {
  export const GlassLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100vw;
    height: 100vh;
    background-color: ${white};
    background-image: radial-gradient(at top left, ${background1}, transparent),
      radial-gradient(at top right, ${background2}, transparent),
      radial-gradient(at bottom left, ${background3}, transparent);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
  `;
}

export default CommonStoryBookStyle;
