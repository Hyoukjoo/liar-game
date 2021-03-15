import { Router } from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleWare from "../middlewares/AuthMiddleware";

const router = Router();

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);
router.post("/logout", AuthMiddleWare.verifyAuthToken, AuthController.logout);
router.get("/me", AuthMiddleWare.verifyAuthToken, AuthController.getMyInfo);
router.delete(
  "/withdraw/:userId",
  AuthMiddleWare.verifyAuthToken,
  AuthController.withdraw
);

export default router;
