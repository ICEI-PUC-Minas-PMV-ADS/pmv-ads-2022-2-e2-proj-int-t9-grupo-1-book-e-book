import express from 'express';
import { getUsers, registerUser } from '../controllers/userController.js';

const getUserRouter = () => {
    const userRouter = express.Router();
    userRouter.get('/', getUsers);
    userRouter.post('/register', registerUser);

    return userRouter;
}

export default getUserRouter;