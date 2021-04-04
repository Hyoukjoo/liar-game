import { Router } from 'express';
import RoomController from '../controllers/RoomController';

const router = Router();
const contoller = new RoomController();

router.get('/', contoller.getRoomList);

router.post('/', contoller.createRoom);

router.get('/:roomId', contoller.getRoom);

router.delete('/:roomId', contoller.deleteRoom);

router.get('/find/:roomName', contoller.deleteRoom);

router.post('/join', contoller.joinRoom);

router.put('/leave/:userId', contoller.leaveRoom);

export default router;
