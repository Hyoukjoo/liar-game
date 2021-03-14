import { Router } from "express";

import userRouter from "./user";
import roomRouter from "./room";
import gameRouter from "./game";
import authRouter from "./auth";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/rooms", roomRouter);
router.use("/games", gameRouter);

export default router;
