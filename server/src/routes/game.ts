import { Router } from 'express';
import GameController from '../controllers/Gamecontroller';

const router = Router();
const controller = new GameController();

router.get('/:gameId', controller.getGame);

router.post('/', controller.createGame);

router.delete('/:gameId', controller.deleteGame);

export default router;
