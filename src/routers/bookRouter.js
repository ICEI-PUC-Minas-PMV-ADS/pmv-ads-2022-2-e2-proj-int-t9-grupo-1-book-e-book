import express from 'express';
import { Books } from '../controllers/bookController.js';

const getBookRouter = () => {
    const bookRouter = express.Router();
    bookRouter.get('/', Books.getBooks);
    bookRouter.get('/:genre', Books.viewBooksByGenre)
    bookRouter.post('/', Books.postBookToRent);
    bookRouter.post('/rent', Books.rentBook);

    return bookRouter;
}

export default getBookRouter;