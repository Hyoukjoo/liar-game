import RoomModel from './RoomModel';
import CategoryModel from './CategoryModel';
import GameDto from '@services/Game/dto/GameDto';
import UserModel from './UserModel';
import KeywordModel from './KeywordModel';

export default class GameModel {
  id: number;
  room: RoomModel;
  category: CategoryModel;
  liar: UserModel;
  keyword: KeywordModel;
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: GameDto) {
    this.id = dto.id;
    this.room = dto.room && new RoomModel(dto.room);
    this.category = dto.category && new CategoryModel(dto.category);
    this.liar = new UserModel(dto.liar);
    this.keyword = new KeywordModel(dto.keyword);
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }
}
