import express from 'express';
import { getBooks } from '../controllers/bookController.js';

const getBookRouter = () => {
    const bookRouter = express.Router();
    bookRouter.get('/', getBooks);

    return bookRouter;
}

export default getBookRouter;