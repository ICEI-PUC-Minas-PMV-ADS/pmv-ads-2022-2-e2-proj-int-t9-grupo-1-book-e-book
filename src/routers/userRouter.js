import express from 'express';
import { User } from '../controllers/userController.js';

const getUserRouter = () => {
    const userRouter = express.Router();
    userRouter.get('/', User.getUsers);
    userRouter.post('/register', User.registerUser);
    userRouter.post('/login', User.loginUser)


    return userRouter;
}

export default getUserRouter;