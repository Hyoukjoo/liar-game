import RoomDto from '@services/Room/dto/RoomDto';
import UserDto from '@services/User/dto/UserDto';
import CategoryDto from './CategoryDto';
import KeywordDto from './KeywordDto';

export default interface GameDto {
  id: number;
  room: RoomDto;
  category: CategoryDto;
  liar: UserDto;
  targetKeyword: KeywordDto;
  createdAt: string;
  updatedAt: string;
}
