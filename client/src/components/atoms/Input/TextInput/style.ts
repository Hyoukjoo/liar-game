import styled from '@emotion/styled';
import { BaseInput } from '..';

namespace TextInputStyle {
  export const Input = styled(BaseInput)`
    &:disabled {
      border: 2px solid red;
    }
  `;
}

export default TextInputStyle;
