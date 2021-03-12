import BaseApiService from "@services/BaseApiService";
import GameDto from "./dto/GameDto";
import { CreateGameBody } from "./RequestBodyType";

class GameApiService extends BaseApiService {
  async getGame(gameId: number) {
    return await this.get<GameDto>(`/${gameId}`);
  }

  async createGame(body: CreateGameBody) {
    return await this.post<GameDto>("/", body);
  }

  async deleteGame(gameId: number) {
    return await this.delete<boolean>(`/${gameId}`);
  }
}

export default new GameApiService("games");
