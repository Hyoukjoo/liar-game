import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();
const controller = new UserController();

export default router;
