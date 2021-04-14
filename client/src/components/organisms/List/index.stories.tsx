import { number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { EntryList, RoomList } from '.';
import { ROOMS } from '@common/mocks/room';
import { ENTRIES } from '@common/mocks/user';

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

export const Room_List = () => {
  const rooms = ROOMS.slice(
    0,
    number('room count', ROOMS.length, {
      min: 1,
      max: ROOMS.length,
      step: 1,
    })
  );

  return <RoomList rooms={rooms} onClickJoinButton={action('join button')} />;
};
