import BaseApiService from "../BaseApiService";
import UserDto from "./dto/UserDto";

class UserApiService extends BaseApiService {
  async createUser(userName: string) {
    return await this.post<UserDto>(`/`, { userName });
  }

  async deleteUser(userId) {
    return await this.delete<boolean>(`/${userId}`);
  }
}

export default new UserApiService("users");
