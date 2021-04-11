import RoomDto from '@services/Room/dto/RoomDto';
import CategoryModel from './CategoryModel';
import UserModel from './UserModel';

export default class RoomModel {
  id: string;
  name: string;
  owner: UserModel;
  member: UserModel[];
  categories: CategoryModel[];
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: RoomDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.owner = dto.owner && new UserModel(dto.owner);
    this.member = dto.member && UserModel.createFromApi(dto.member);
    this.categories =
      dto.categories && CategoryModel.createFromApi(dto.categories);
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }

  static createFromApi(dtos: RoomDto[]) {
    return dtos.map((dto) => new RoomModel(dto));
  }
}
