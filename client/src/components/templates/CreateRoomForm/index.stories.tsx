import CreateRoomForm from '.';

export default {
  title: 'TEMPLATE/FORM',
};

export const Create_Room_Form = () => {
  const createRoom = (roomName: string) => {
    console.log(roomName);
  };

  return <CreateRoomForm createRoom={createRoom} />;
};
