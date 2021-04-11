import { Request, Response } from 'express';
import { Like } from 'typeorm';
import Category from '../models/Category';
import Room from '../models/Room';
import User from '../models/User';

export default class RoomController {
  async getRoomList(req: Request, res: Response) {
    try {
      const result = await Room.find({ relations: ['owner', 'member'] });

      res.status(200).json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async getRoom(req: Request, res: Response) {
    try {
      const { roomId } = req.params;

      const result = await Room.findOne(roomId, {
        relations: ['owner', 'member'],
      });

      const categories = await Category.find();

      res.json({ ...result, categories });
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async createRoom(req: Request, res: Response) {
    try {
      const { roomName, userId } = req.body;

      const user = await User.findOne(userId);

      const roomModel = Room.createModel({ roomName, user });

      const result = await roomModel.save();

      await User.createQueryBuilder()
        .update()
        .whereInIds(userId)
        .set({ room: result })
        .execute();

      delete result.owner.password;

      res.json(result);
    } catch (e) {
      console.log(e);

      res.status(500).end();
    }
  }

  async deleteRoom(req: Request, res: Response) {
    try {
      const { roomId } = req.params;

      const result = await Room.createQueryBuilder()
        .delete()
        .whereInIds(roomId)
        .execute();

      res.json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async findRoom(req: Request, res: Response) {
    try {
      const { roomName } = req.params;

      const result = await Room.find({
        where: [{ name: Like(`%${roomName}%`) }],
        relations: ['owner'],
      });

      res.json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async joinRoom(req: Request, res: Response) {
    try {
      const roomId = req.body.roomId;
      const userId = Number(req.body.userId);

      const room = await Room.findOne(roomId);

      const result = await User.createQueryBuilder()
        .update()
        .whereInIds(userId)
        .set({ room })
        .execute();

      res.json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async leaveRoom(req: Request, res: Response) {
    try {
      const userId = Number(req.body.userId);

      const result = await User.createQueryBuilder()
        .update()
        .whereInIds(userId)
        .set({ room: null })
        .execute();

      res.json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }
}
