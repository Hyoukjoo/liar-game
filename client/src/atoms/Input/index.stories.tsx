import { FC } from 'react';

import { BaseInput, TextInput } from '.';

export default {
  title: 'Atom/Input',
};

export const Base: FC = () => {
  return <BaseInput />;
};

export const Text: FC = () => {
  return <TextInput />;
};
