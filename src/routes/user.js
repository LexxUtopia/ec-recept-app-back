import express from 'express';
import { getAllUsers, getUser } from '../controllers/user';

const router = express.Router();

router.post('/', createUser);
router.get('/', getAllUsers);
router.get('/:userId', getUser);

export default router;