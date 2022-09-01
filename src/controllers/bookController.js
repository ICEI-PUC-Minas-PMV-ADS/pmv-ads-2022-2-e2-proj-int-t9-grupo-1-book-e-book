import database from '../config/database.js';
import { BadRequestError, NotFoundError } from '../utils/errors.js';

const getBooks = async (request, response, next) => {
    try {
        const { rowCount, rows } = await database().query('SELECT * FROM books');
        if (rowCount === 0) throw new NotFoundError;
        return response.status(200).json(rows);
    } catch (error) {
        next(error)
    };
};

export {
    getBooks
}