import { Router } from "express";

import userRouter from "./user";
import roomRouter from "./room";
import gameRouter from "./game";

const router = Router();

router.use("/api/users", userRouter);
router.use("/api/rooms", roomRouter);
router.use("/api/games", gameRouter);

export default router;
