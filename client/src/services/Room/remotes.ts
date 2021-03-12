import { CreateRoomBody, JoinRoomBody } from "./RequestBodyType";
import RoomApiService from "./RoomApiService";

export const getRoom = async (roomId: string) => {
  try {
    const result = await RoomApiService.getRoom(roomId);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const getRoomList = async () => {
  try {
    const result = await RoomApiService.getRoomList();

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const createRoom = async (body: CreateRoomBody) => {
  try {
    const result = await RoomApiService.createRoom(body);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const findRooms = async (roomName: string) => {
  try {
    const result = await RoomApiService.findRooms(roomName);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const joinRoom = async (body: JoinRoomBody) => {
  try {
    const result = await RoomApiService.joinRoom(body);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const leaveRoom = async (userId: number) => {
  try {
    const result = await RoomApiService.leaveRoom(userId);

    return result.data;
  } catch (e) {
    console.error(e);

    return false;
  }
};
