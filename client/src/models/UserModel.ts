import UserDto from "src/services/User/dto/UserDto";

export default class UserModel {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: UserDto) {
    this.id = dto.id;
    this.name = dto.name;
    this.createdAt = new Date(dto.createdAt);
    this.updatedAt = new Date(dto.updatedAt);
  }

  static createFromApi(dtos: UserDto[]) {
    return dtos.map((dto) => new UserModel(dto));
  }
}
