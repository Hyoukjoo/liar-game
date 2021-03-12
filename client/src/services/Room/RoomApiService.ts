import BaseApiService from "../BaseApiService";
import RoomDto from "./dto/RoomDto";
import { CreateRoomBody, JoinRoomBody } from "./RequestBodyType";

class RoomApiService extends BaseApiService {
  async getRoomList() {
    return await this.get<RoomDto[]>("/");
  }

  async getRoom(roomId: string) {
    return await this.get<RoomDto>(`/${roomId}`);
  }

  async createRoom(body: CreateRoomBody) {
    return await this.post<RoomDto>("/", body);
  }

  async findRooms(roomName: string) {
    return await this.get<RoomDto[]>(`/find/${roomName}`);
  }

  async joinRoom(body: JoinRoomBody) {
    return await this.post("/join", body);
  }

  async leaveRoom(userId: number) {
    return await this.put(`/leave`, { userId });
  }
}

export default new RoomApiService("rooms");
