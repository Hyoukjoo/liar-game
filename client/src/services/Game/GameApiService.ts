import BaseApiService from '@services/BaseApiService';
import GameDto from './dto/GameDto';
import { CreateGameBody } from './RequestBody';

class GameApiService extends BaseApiService {
  getGame(gameId: number) {
    return this.get<GameDto>(`/${gameId}`);
  }

  createGame(body: CreateGameBody) {
    return this.post<GameDto>('/', body);
  }

  deleteGame(gameId: number) {
    return this.delete<boolean>(`/${gameId}`);
  }
}

export default new GameApiService('games');
