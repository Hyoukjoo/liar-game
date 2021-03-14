import { Router } from "express";
import AuthController from "../controllers/AuthController";
import AuthMiddleWare from "../middlewares/AuthMiddleware";

const router = Router();

router.post("/login", AuthController.login);
router.post("/signup", AuthController.signup);
router.post("/logout", AuthMiddleWare.checkToken, AuthController.logout);
router.get("/me", AuthMiddleWare.checkToken, AuthController.getMyInfo);

export default router;
