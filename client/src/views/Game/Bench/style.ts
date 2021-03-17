import styled from "@emotion/styled";
import { Title } from "@atoms/Heading";

namespace GameBenchViewStyle {
  export const Container = styled.div`
    display: grid;
    align-content: center;
    height: 100%;
  `;

  export const EntryList = styled(Title)`
    margin-bottom: 20px;
  `;

  export const Ul = styled.ul`
    margin: 0 20px;
    width: calc(100% - 40px);
    min-height: 200px;
    max-height: 400px;
    overflow-y: scroll;
    border: 1px solid gray;
    margin-bottom: 20px;
    border-radius: 5px;
  `;

  export const Bottom = styled.div`
    display: grid;
    justify-content: center;
  `;
}

export default GameBenchViewStyle;
