import styled from '@emotion/styled';

import { getBlackOpacity, getWhiteOpacity } from '@common/styles/opacity';
import { H1 } from '@atoms/Heading/Normal';
import { BaseLayout } from '@templates/Layout';

namespace HomeViewStyle {
  export const HomeLayout = styled(BaseLayout)`
    padding: 0 30px;
  `;

  export const GameName = styled(H1)`
    font-family: JellyFruit;
    font-size: 4rem;
    letter-spacing: 0.1rem;
    color: ${getWhiteOpacity(90)};
    margin-bottom: 20px;
    text-shadow: 4px 4px 10px ${getBlackOpacity(40)};
  `;

  export const ButtonBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
  `;
}

export default HomeViewStyle;
