import UserDto from '@services/User/dto/UserDto';

export default class UserModel {
  id: number;
  email: string;
  nickname: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(dto: UserDto) {
    Object.assign(this, {
      ...dto,
      createdAt: new Date(dto.createdAt),
      updatedAt: new Date(dto.updatedAt),
    });
  }

  static createFromApi(dtos: UserDto[]) {
    return dtos.map((dto) => new UserModel(dto));
  }
}
