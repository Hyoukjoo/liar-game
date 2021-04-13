import BaseApiService from '../BaseApiService';
import RoomDto from './dto/RoomDto';
import { CreateRoomBody, JoinRoomBody } from './RequestBodyType';

class RoomApiService extends BaseApiService {
  getRoomList() {
    return this.get<RoomDto[]>('/');
  }

  getRoom(roomId: string) {
    return this.get<RoomDto>(`/${roomId}`);
  }

  createRoom(body: CreateRoomBody) {
    return this.post<RoomDto>('/', body);
  }

  findRooms(roomName: string) {
    return this.get<RoomDto[]>(`/find/${roomName}`);
  }

  joinRoom(body: JoinRoomBody) {
    return this.post('/join', body);
  }

  leaveRoom(userId: number) {
    return this.put(`/leave`, { userId });
  }
}

export default new RoomApiService('rooms');
