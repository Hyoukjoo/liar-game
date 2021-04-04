import BaseApiService from '@services/BaseApiService';
import UserDto from '@services/User/dto/UserDto';
import { LoginBody, SignUpBody } from './RequestBody';

class AuthApiService extends BaseApiService {
  async signup(body: SignUpBody) {
    return await this.post<UserDto>('/signup', body);
  }

  async login(body: LoginBody) {
    return await this.post<UserDto>('/login', body, { withCredentials: true });
  }

  async logout() {
    return await this.post<boolean>('/logout', {}, { withCredentials: true });
  }

  async getMyInfo() {
    return await this.get<UserDto>('/me', { withCredentials: true });
  }
}

export default new AuthApiService('auth');
