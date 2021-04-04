import styled from '@emotion/styled';

namespace EntryItemStyle {
  export const Item = styled.li`
    display: grid;
    padding-left: 10px;
    width: 100%;
    height: 50px;

    /* &:last-of-type {
      & > div {
        border-bottom: none;
      }
    } */
  `;

  export const Inner = styled.div`
    display: grid;
    grid-template-columns: 1fr 36px;
    align-content: center;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid gray;
  `;

  export const NameBox = styled.div`
    display: flex;
  `;

  export const EntryName = styled.p`
    display: inline-block;
    margin-right: 10px;
    font-size: 1.3rem;
  `;

  export const IconWrapper = styled.div`
    display: grid;
    align-items: center;
  `;
}

export default EntryItemStyle;
