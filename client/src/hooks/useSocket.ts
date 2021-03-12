import { useEffect, useState } from "react";
import SocketClient from "socket.io-client";

const manager = new SocketClient.Manager("http://localhost:4000", {
  path: "/socket.io",
  transports: ["websocket"],
}).connect();

const io = manager.socket("/").connect();
const roomIO = manager.socket("/socket.room").connect();

export default function useSocket() {
  const [socket, setSocket] = useState<SocketClient.Socket>(null);
  const [roomSocket, setRoomSocket] = useState<SocketClient.Socket>(null);

  useEffect(() => {
    return function cleanup() {
      console.log("cleanup");
      io.disconnect();
      roomIO.disconnect();
    };
  }, [io, roomIO]);

  useEffect(() => {
    if (!socket) {
      console.log("socket");
      setSocket(io);
    }
  }, [io]);

  useEffect(() => {
    if (!roomSocket) {
      console.log("room socket");
      setRoomSocket(roomIO);
    }
  }, [roomIO]);

  return { socket, roomSocket };
}
