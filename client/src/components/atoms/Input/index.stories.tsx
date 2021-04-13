import { BaseInput, GlassInput } from '.';
import { white } from '@common/styles/color';

export default {
  title: 'ATOM/INPUT',
};

export const Base_Input = () => {
  return (
    <BaseInput
      placeholder={'여기 있어요~'}
      style={{ border: `2px dashed ${white} !important;` }}
    />
  );
};

export const Glass_Input = () => {
  return <GlassInput />;
};
