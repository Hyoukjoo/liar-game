import UserDto from '@services/User/dto/UserDto';

export default interface RoomDto {
  id: string;
  name: string;
  owner: UserDto;
  member?: UserDto[];
  createdAt: string;
  updatedAt: string;
}
