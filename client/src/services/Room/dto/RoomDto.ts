import CategoryDto from '@services/Game/dto/CategoryDto';
import UserDto from '@services/User/dto/UserDto';

export default interface RoomDto {
  id: string;
  name: string;
  owner: UserDto;
  member?: UserDto[];
  categories?: CategoryDto[];
  createdAt: string;
  updatedAt: string;
}
