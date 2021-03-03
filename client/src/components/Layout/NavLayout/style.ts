import { FullHeightExceptNav, NavHeight } from "@common/styles/height";
import styled from "@emotion/styled";
import { BaseLayout } from "..";

namespace NavLayoutStyle {
  export const Layout = styled(BaseLayout)``;

  export const Nav = styled.nav`
    position: sticky;
    top: 0;
    left: 0;
    display: grid;
    grid-template-columns: 50px 1fr 50px;
    justify-content: center;
    justify-items: center;
    align-items: center;
    width: 100%;
    height: ${NavHeight};
    border-bottom: 1px solid gray;
    background-color: #fff;
  `;

  export const NavLeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  `;

  export const Body = styled.div`
    width: 100%;
    height: ${FullHeightExceptNav};
  `;
}

export default NavLayoutStyle;
