import { CSSProperties, FC } from 'react';

import { BaseDiv, GlassDiv } from '.';
import { white } from '@common/styles/color';

export default {
  title: 'Atom/Div',
};

const style: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '80%',
  height: '80%',
  transform: 'translate(-50%, -50%)',
};

export const Base: FC = () => {
  return <BaseDiv style={{ ...style, border: `1px solid ${white}` }}></BaseDiv>;
};

export const Glass: FC = () => {
  return <GlassDiv style={style}></GlassDiv>;
};
