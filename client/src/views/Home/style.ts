import styled from "@emotion/styled";
import { BaseLayout } from "@components/Layout";

namespace HomeStyles {
  export const HomeLayout = styled(BaseLayout)`
    display: grid;
    justify-content: center;
    align-content: center;
  `;

  export const Title = styled.h1`
    text-align: center;
    margin-bottom: 10px;
  `;

  export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    padding: 10px 50px;
    margin-bottom: 30px;
  `;

  export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;

    & > button {
      margin: 0 10px;
    }
  `;
}

export default HomeStyles;
