export interface CreateRoomBody {
  userId: number;
  roomName: string;
}

export interface JoinRoomBody {
  userId: number;
  roomId: string;
}
