import styled from '@emotion/styled';

import { HeaderHeight } from '@common/styles/height';

namespace TripleAreaHeaderStyle {
  export const Header = styled.header`
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: ${HeaderHeight} 1fr ${HeaderHeight};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${HeaderHeight};
    background-color: transparent;
  `;

  export const Area = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;
}

export default TripleAreaHeaderStyle;
