import styled from '@emotion/styled';

namespace CreateRoomFormStyle {
  export const Form = styled.form`
    & > input {
      margin-bottom: 20px;
    }
  `;

  export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
  `;
}

export default CreateRoomFormStyle;
