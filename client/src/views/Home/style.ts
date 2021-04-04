import { GlassDiv } from '@atoms/Div';
import styled from '@emotion/styled';
import { BaseLayout } from '@molecules/Layout';

namespace HomeStyles {
  export const HomeLayout = styled(BaseLayout)`
    display: grid;
    align-content: center;
  `;

  export const Container = styled(GlassDiv)`
    padding: 0 20px;
    width: 100%;
    height: 70vh;
    border-radius: 20px;
  `;

  export const Title = styled.h1`
    text-align: center;
    margin-bottom: 10px;
  `;

  export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    justify-items: center;
    margin-bottom: 30px;
  `;

  export const ButtonBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
  `;
}

export default HomeStyles;
