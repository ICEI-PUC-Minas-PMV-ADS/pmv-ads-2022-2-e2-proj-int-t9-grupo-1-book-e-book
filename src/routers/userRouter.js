import express from 'express';
import { getUsers } from '../controllers/userController.js';

const getUserRouter = () => {
    const bookRouter = express.Router();
    bookRouter.get('/', getUsers);

    return bookRouter;
}

export default getUserRouter;