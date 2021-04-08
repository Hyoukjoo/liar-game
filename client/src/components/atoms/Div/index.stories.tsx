import { CSSProperties } from 'react';

import { BaseDiv, GlassDiv } from '.';
import { white } from '@common/styles/color';

export default {
  title: 'ATOM/DIV',
};

const style: CSSProperties = {
  position: 'absolute',
  left: '50%',
  top: '50%',
  width: '80%',
  height: '80%',
  transform: 'translate(-50%, -50%)',
};

export const Base_Div = () => {
  return <BaseDiv style={{ ...style, border: `1px solid ${white}` }}></BaseDiv>;
};

export const Glass_Div = () => {
  return <GlassDiv style={style}></GlassDiv>;
};
