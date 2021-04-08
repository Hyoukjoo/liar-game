import styled from '@emotion/styled';

import { BaseLayout } from '..';

namespace HeaderLayoutStyle {
  export const Layout = styled(BaseLayout)``;

  export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100%;
  `;
}

export default HeaderLayoutStyle;
