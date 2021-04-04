import GameApiService from './GameApiService';
import { CreateGameBody } from './RequestBody';

export const getGame = async (gameId: number) => {
  try {
    const result = await GameApiService.getGame(gameId);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const createGame = async (body: CreateGameBody) => {
  try {
    const result = await GameApiService.createGame(body);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};

export const deleteGame = async (gameId: number) => {
  try {
    const result = await GameApiService.deleteGame(gameId);

    return result.data;
  } catch (e) {
    console.error(e);

    return null;
  }
};
