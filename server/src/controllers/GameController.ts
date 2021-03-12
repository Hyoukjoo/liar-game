import { Request, Response } from "express";
import Category from "../models/Category";
import Game from "../models/Game";
import Room from "../models/Room";

export default class GameController {
  async getGame(req: Request, res: Response) {
    try {
      const { gameId } = req.params;

      const result = await Game.findOne(gameId, {
        relations: [
          "room",
          "room.owner",
          "room.member",
          "category",
          "category.keywords",
        ],
      });

      const liarIndex = Math.floor(Math.random() * result.room.member.length);

      const liar = result.room.member[liarIndex];

      const targetKeywordIndex = Math.floor(
        Math.random() * result.category.keywords.length
      );

      const targetKeyword = result.category.keywords[targetKeywordIndex];

      res.status(200).json({ ...result, liar, targetKeyword });
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async createGame(req: Request, res: Response) {
    try {
      const { roomId, categoryId } = req.body;

      const room = await Room.findOne(roomId);
      const category = await Category.findOne(categoryId);

      const game = await Game.createModel({ room, category });

      const result = await game.save();

      res.status(200).json({ ...result });
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async deleteGame(req: Request, res: Response) {
    try {
      const { gameId } = req.params;

      const result = await Game.createQueryBuilder()
        .delete()
        .where({ id: gameId })
        .execute();

      res.status(200).json(true);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }
}
