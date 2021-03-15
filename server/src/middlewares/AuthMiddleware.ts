import { Request, Response, NextFunction } from "express";
import Token from "../utils/token";

class AuthMiddleWare {
  static verifyAuthToken(req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.cookies["AUTH_TOKEN"];

      if (token === undefined) {
        res.status(400).end();
        return;
      }

      const decoded = Token.verify(token);
      const { userId } = decoded;

      if (decoded.isRemainedOneDay) {
        const newToken = Token.getToken({ userId });

        res.cookie("AUTH_TOKEN", newToken, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true,
        });
      }

      res.locals.user = { userId };

      next();
    } catch (e) {
      if (e.message === "jwt expired") {
        console.error(e.message);

        res.status(401).end();
      } else if (e.message === "invalid token") {
        console.error(e.message);

        res.status(401).end();
      } else {
        console.error(e);

        res.status(500).end();
      }
    }
  }
}

export default AuthMiddleWare;
