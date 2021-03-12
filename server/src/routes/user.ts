import express from "express";
import UserController from "../controllers/UserController";

const router = express.Router();
const controller = new UserController();

router.get("/", (req, res) => {
  res.json({});
});

router.post("/", controller.createUser);

router.delete("/:userId", controller.deleteUser);

export default router;
