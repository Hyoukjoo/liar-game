import { white } from '@common/styles/color';
import { FullHeightExceptNav, NavHeight } from '@common/styles/height';
import { getWhiteOpacity } from '@common/styles/opacity';
import styled from '@emotion/styled';
import { BaseLayout } from '..';

namespace NavLayoutStyle {
  export const Layout = styled(BaseLayout)``;

  export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: ${NavHeight};
    background-color: transparent;
  `;

  export const NavLeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  export const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    width: 100%;
    height: 100%;
  `;
}

export default NavLayoutStyle;
