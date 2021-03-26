import socketio from 'socket.io';
import { Server } from 'http';

import runRoomSocket from './room';

const createSocketIO = (server: Server) => {
  const io = new socketio.Server(server, {
    path: '/socket.io',
    transports: ['websocket'],
    cors: {
      origin: '*',
    },
  });

  io.on('connection', (socket: socketio.Socket) => {
    console.log('connection', socket.id);
  });

  runRoomSocket(io);
};

export default createSocketIO;
