import styled from '@emotion/styled';

import { BaseInput } from '@atoms/Input';
import { getHexOpacity } from '@common/styles/opacity';
import { red } from '@common/styles/color';

interface StyleProps {
  validity?: boolean;
}

namespace ValidateInputStyle {
  export const container = styled.div`
    margin-bottom: 20px;
  `;

  export const ValidationInput = styled(BaseInput)<StyleProps>`
    ${(props) =>
      !props.validity && `border: 1px solid ${getHexOpacity(red, 20)}`};
  `;

  export const Message = styled.p`
    padding-top: 5px;
    padding-left: 10px;
    font-size: 0.5rem;
    color: ${getHexOpacity(red, 80)};
  `;
}

export default ValidateInputStyle;
