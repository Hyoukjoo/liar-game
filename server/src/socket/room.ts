import { Server, Socket, Namespace } from 'socket.io';

interface Room {
  id: string;
  name: string;
  owner: string;
  createdAt: Date;
}

interface RoomMember {
  id: string; //primary key
  roomId: string; //foreign key
  userName: string;
}

const rooms = new Map<string, Room>();
const roomMember = new Map<string, RoomMember[]>();

const runRoomSocket = (io: Server) => {
  const ns = io.of('socket.room');

  ns.on('connection', (socket: Socket) => {
    console.log('ns connection', socket.id);
    createRoom(socket, ns);
    joinRoom(socket);
    leaveRoom(socket);
  });
};

const createRoom = (socket: Socket, ns: Namespace) => {
  socket.on('createRoom', (data) => {
    const { userName, roomName } = data;
    const createdAt = new Date();
    const time = createdAt.getTime();
    const roomId = `${userName}-${roomName}-${time}`;

    rooms.set(roomId, {
      id: roomId,
      name: roomName,
      owner: userName,
      createdAt,
    });

    roomMember.set(roomId, [{ roomId, id: `${userName}-time`, userName }]);

    console.log(rooms.entries());
    console.log(roomMember.entries());

    socket.join(roomId);
    ns.to(roomId).emit('successCreateRoom', rooms.get(roomId));
  });
};

const joinRoom = (socket: Socket) => {
  socket.on('joinRoom', (data) => {
    socket.join(data.roomId);
  });
};

const leaveRoom = (socket: Socket) => {
  socket.on('leaveRoom', (data) => {
    const member = roomMember
      .get(data.roomId)
      .filter((m) => m.userName !== data.userName);

    roomMember.set(data.roomId, member);

    socket.leave(data.roomId);
  });
};

export default runRoomSocket;
