import { boolean, number } from '@storybook/addon-knobs';

import { IconButton } from '.';
import SvgRefresh from '@atoms/Icon/Refresh';

export default {
  title: 'MOLECULE/BUTTON',
};

export const Icon_Button = () => {
  const size = number('size', 36);
  return (
    <IconButton
      Svg={SvgRefresh}
      width={`${size}px`}
      height={`${size}px`}
      isTransparent={boolean('transparent', false)}
    />
  );
};
