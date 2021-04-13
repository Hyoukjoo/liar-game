import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { GlassButton } from '@atoms/Button';
import { getBlackOpacity } from '@common/styles/opacity';
import Icon from '@atoms/Icon/Component';

interface IconButtonStyleProps {
  width?: string;
  height?: string;
  isTransparent?: boolean;
}

const getTransparentStyle = ({
  isTransparent,
}: Pick<IconButtonStyleProps, 'isTransparent'>) =>
  isTransparent &&
  css`
    background: transparent;
    border: none;
    box-shadow: none;
    backdrop-filter: none;

    &:hover {
      background: transparent;
      box-shadow: none;
    }

    &:active {
      box-shadow: inset 4px 4px 20px 0px ${getBlackOpacity(20)};
    }
  `;

namespace IconButtonStyle {
  export const Button = styled(GlassButton)<IconButtonStyleProps>`
    position: relative;
    display: flex;
    justify-content: center;
    align-self: center;
    padding: 0;
    width: ${(props) => `calc(${props.width} + 18px)`};
    height: ${(props) => `calc(${props.height} + 18px)`};
    border-radius: 50%;

    ${getTransparentStyle};
  `;

  export const LabelIcon = styled(Icon)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;
}

export default IconButtonStyle;
