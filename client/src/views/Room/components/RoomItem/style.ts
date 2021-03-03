import styled from "@emotion/styled";

interface StyleProps {
  isSelected?: boolean;
}

namespace RoomItemStyle {
  export const Item = styled.li<StyleProps>`
    display: grid;
    grid-template-columns: 1fr 50px;
    margin-left: 10px;
    padding-left: 5px;
    width: calc(100% - 10px);
    height: 60px;
    border-bottom: 1px solid gray;
    background-color: ${(props) => props.isSelected && "#bbdfc8"};
  `;

  export const LeftSide = styled.div`
    display: grid;
    align-content: center;
  `;

  export const RoomName = styled.h6`
    font-size: 1.3rem;
  `;

  export const OwnerName = styled.p`
    font-size: 1rem;
  `;

  export const RightSide = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
  `;
}

export default RoomItemStyle;
