import styled from '@emotion/styled';

import {
  background1,
  background2,
  background3,
  white,
} from '@common/styles/color';
import { BaseDiv } from '@atoms/Div';

namespace BaseLayoutStyles {
  export const Layout = styled(BaseDiv)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: ${(props) => `calc(
      ${props.theme.client.vh100} - env(safe-area-inset-bottom) - env(safe-area-inset-top)
    )`};
    background-color: ${white};
    background-image: radial-gradient(at top left, ${background1}, transparent),
      radial-gradient(at top right, ${background2}, transparent),
      radial-gradient(at bottom left, ${background3}, transparent);
    background-size: 100% 100%;
    background-repeat: no-repeat;
  `;
}

export default BaseLayoutStyles;
