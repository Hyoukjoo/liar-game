import BaseApiService from '@services/BaseApiService';
import UserDto from '@services/User/dto/UserDto';
import { LoginBody, SignUpBody } from './RequestBody';

class AuthApiService extends BaseApiService {
  signup(body: SignUpBody) {
    return this.post<UserDto>('/signup', body);
  }

  login(body: LoginBody) {
    return this.post<UserDto>('/login', body, { withCredentials: true });
  }

  logout() {
    return this.post<boolean>('/logout', {}, { withCredentials: true });
  }

  getMyInfo() {
    return this.get<UserDto>('/me', { withCredentials: true });
  }
}

export default new AuthApiService('auth');
