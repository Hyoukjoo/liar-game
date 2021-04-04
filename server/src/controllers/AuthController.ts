import { Request, Response } from 'express';
import bcrypt from 'bcrypt';

import User from '../models/User';
import Token from '../utils/token';

const SALT_ROUNDS = 10;

export default class AuthController {
  static async signup(req: Request, res: Response) {
    try {
      const { email, password, nickname } = req.body;
      const isExistedEmail =
        (await User.findOne({ where: { email } })) !== undefined;

      if (isExistedEmail) {
        res.status(400).end();
        return;
      }

      const salt = bcrypt.genSaltSync(SALT_ROUNDS);
      const hash = bcrypt.hashSync(password, salt);

      const user = User.create({ email, password: hash, nickname });

      const result = await user.save();
      delete result.password;

      res.status(200).send(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  static async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });

      if (user === undefined) {
        res.status(400).end();
        return;
      }

      const isEqualPassword = await bcrypt.compare(password, user.password);

      if (!isEqualPassword) {
        res.status(400).end();
        return;
      }

      const token = Token.getToken({ userId: user.id as number });
      delete user.password;

      res.cookie('AUTH_TOKEN', token, {
        httpOnly: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
      });
      res.status(200).json(user);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  static async logout(req: Request, res: Response) {
    try {
      res.clearCookie('AUTH_TOKEN');
      res.status(200).send(true);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }

  static async withdraw(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const result = await User.createQueryBuilder()
        .delete()
        .whereInIds(userId)
        .execute();

      if (result.affected > 0) {
        res.clearCookie('AUTH_TOKEN');
        res.status(200).json({ data: true });
      } else {
        res.status(400).json({ data: false });
      }
    } catch (e) {
      console.error(e);

      res.status(500).json({ data: false });
    }
  }

  static async getMyInfo(req: Request, res: Response) {
    try {
      const { user } = res.locals;

      const result = await User.findOne(user.userId);
      delete result.password;

      res.status(200).json(result);
    } catch (e) {
      console.error(e);

      res.status(500).end();
    }
  }
}
