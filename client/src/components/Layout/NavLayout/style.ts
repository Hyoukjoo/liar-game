import styled from "@emotion/styled";
import { BaseLayout } from "..";

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
    height: 50px;
    border-bottom: 1px solid gray;
  `;
}

export default NavLayoutStyle;
