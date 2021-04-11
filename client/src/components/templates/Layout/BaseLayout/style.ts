import styled from '@emotion/styled';

import { BaseDiv } from '@atoms/Div';
import { getBackgroundStyle } from '@common/styles/background';

namespace BaseLayoutStyles {
  export const Layout = styled(BaseDiv)`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: ${(props) => `calc(
      ${props.theme.client.vh100} - env(safe-area-inset-bottom) - env(safe-area-inset-top)
    )`};
    ${getBackgroundStyle};
  `;
}

export default BaseLayoutStyles;
