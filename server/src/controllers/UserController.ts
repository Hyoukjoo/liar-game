import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import User from "../models/User";
import UserRepository from "../repositories/UserRepository";

export default class UserController {
  constructor() {
    this.createUser = this.createUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  private get userService() {
    return getCustomRepository(UserRepository);
  }

  async createUser(req: Request, res: Response) {
    try {
      const userName = String(req.body.userName);

      if (userName.trim().length < 1) {
        res.statusMessage = "이름이 없음";
        res.status(400).end();
        return;
      }

      const isExistUser = await this.userService.checkExistedUserName(userName);

      if (isExistUser) {
        res.statusMessage = "이미 존재하는 이름";
        res.status(400).json(false);
        return;
      }

      const user = User.create({ name: userName });

      const result = await this.userService.save(user);

      res.status(200).json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { userId } = req.params;

      await this.userService.removeByIds([userId]);

      res.status(200).json(true);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }
}
