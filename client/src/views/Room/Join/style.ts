import styled from "@emotion/styled";

namespace RoomJoinViewStyle {
  export const Container = styled.div`
    display: grid;
    align-content: center;
    height: 100%;
  `;

  export const SearchBox = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    column-gap: 10px;
    padding: 0 20px;
    margin-bottom: 20px;
    width: 100%;

    & > input {
      width: 90%;
    }
  `;

  export const Ul = styled.ul`
    margin: 0 20px;
    width: calc(100% - 40px);
    min-height: 200px;
    max-height: 300px;
    overflow-y: scroll;
    border: 1px solid gray;
    margin-bottom: 20px;
    border-radius: 5px;
  `;

  export const Bottom = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 20px;
  `;
}

export default RoomJoinViewStyle;
