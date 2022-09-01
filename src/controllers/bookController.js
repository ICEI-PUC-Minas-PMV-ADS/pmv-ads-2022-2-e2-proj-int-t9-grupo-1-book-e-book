import database from '../config/database.js';
import { NotFoundError } from '../utils/errors.js';

const getBooks = async (_, response, next) => {
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