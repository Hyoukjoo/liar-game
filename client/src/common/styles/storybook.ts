import styled from "@emotion/styled";
import { white } from "./color";

namespace CommonStoryBookStyle {
  export const GlassLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: calc(100vw - 20px);
    height: 100vh;
    background-color: ${white};
    background-image: radial-gradient(at top left, #28527a, transparent),
      radial-gradient(at top right, #8ac4d0, transparent),
      radial-gradient(at bottom left, #e4fbff, transparent);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    box-sizing: border-box;
  `;
}

export default CommonStoryBookStyle;
