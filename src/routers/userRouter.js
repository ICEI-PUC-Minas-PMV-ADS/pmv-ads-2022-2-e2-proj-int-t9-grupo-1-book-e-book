import express from 'express';
import { getUsers, registerUser, loginUser } from '../controllers/userController.js';

const getUserRouter = () => {
    const userRouter = express.Router();
    userRouter.get('/', getUsers);
    userRouter.post('/register', registerUser);
    userRouter.post('/login', loginUser)


    return userRouter;
}

export default getUserRouter;