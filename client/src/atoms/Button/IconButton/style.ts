import styled from '@emotion/styled';
import BaseButton from '../BaseButton';

interface StyleProps {
  width?: string;
  height?: string;
}

namespace IconButtonStyle {
  export const Button = styled(BaseButton)<StyleProps>`
    position: relative;
    width: ${(props) => `calc(${props.width} + 16px)`};
    height: ${(props) => `calc(${props.height} + 16px)`};
    background-color: transparent;
    border-radius: 50%;
    border: none;
    outline: none;

    &:active {
      opacity: 0.5;
    }

    & > svg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `;
}

export default IconButtonStyle;
