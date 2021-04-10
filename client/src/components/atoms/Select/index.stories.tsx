import BaseOption from '@atoms/Option/BaseOption';
import { BaseSelect } from './';

export default {
  title: 'ATOM/SELECT',
};

export const Base_Select = () => {
  return (
    <BaseSelect>
      <BaseOption>1</BaseOption>
      <BaseOption>2</BaseOption>
      <BaseOption>3</BaseOption>
    </BaseSelect>
  );
};
