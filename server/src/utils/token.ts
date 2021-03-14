import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

interface TokenPayload {
  userId: number;
  iss?: string;
  iat?: number;
  exp?: number;
  isRemainedOneDay?: boolean;
}

class Token {
  static getToken(payload: TokenPayload) {
    payload.iss = "system";

    const token = jwt.sign(payload, process.env.JSON_WEB_TOKEN_SECRET_KEY, {
      expiresIn: 5,
    });

    return token;
  }

  static verify(token: string) {
    const decoded = jwt.verify(
      token,
      process.env.JSON_WEB_TOKEN_SECRET_KEY
    ) as TokenPayload;

    decoded.isRemainedOneDay = decoded.exp - Date.now() / 1000 < 5;

    return decoded;
  }
}

export default Token;
