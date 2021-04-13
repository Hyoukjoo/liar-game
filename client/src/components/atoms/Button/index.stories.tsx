import { select, text } from '@storybook/addon-knobs';

import { BaseButton, GlassButton } from '.';
import { Size } from '@common/enums/size';
import { white } from '@common/styles/color';

export default { title: 'ATOM/BUTTON' };

export const Base_Button = () => {
  return (
    <BaseButton
      size={select('size', Size, Size.MEDIUM)}
      style={{ border: `1px dashed ${white}` }}
    >
      {text('label', 'Base Button')}
    </BaseButton>
  );
};

export const Glass_Button = () => {
  return (
    <GlassButton size={select('size', Size, Size.MEDIUM)}>
      {text('label', 'Glass Button')}
    </GlassButton>
  );
};
