import { ENTRIES } from '@common/mocks/user';
import { number } from '@storybook/addon-knobs';
import { EntryList } from '.';

export default {
  title: 'ORGANISM/LIST & ITEM',
};

export const Entry_List = () => {
  const entries = ENTRIES.slice(
    0,
    number('entry count', ENTRIES.length, {
      min: 1,
      max: ENTRIES.length,
      step: 1,
    })
  );

  return <EntryList entries={entries} />;
};
