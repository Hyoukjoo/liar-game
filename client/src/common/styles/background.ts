import { css } from '@emotion/react';

import { background1, background2, background3 } from './color';

export const getBackgroundStyle = () => css`
  background: radial-gradient(at top left, ${background1}, transparent),
    radial-gradient(at top right, ${background2}, transparent),
    radial-gradient(at bottom left, ${background3}, transparent);
  background-size: 100% 100%;
  background-repeat: no-repeat;
`;
