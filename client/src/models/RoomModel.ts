import RoomDto from 'src/services/Room/dto/RoomDto';
import UserModel from './UserModel';

export default class RoomModel {
  id: string;
  name: string;
  owner: UserModel;
  member: UserModel[];
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: RoomDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.owner = dto.owner && new UserModel(dto.owner);
    this.member = dto.member && UserModel.createFromApi(dto.member);
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }

  static createFromApi(dtos: RoomDto[]) {
    return dtos.map((dto) => new RoomModel(dto));
  }
}
