import database from '../config/database.js';
import { NotFoundError } from '../utils/errors.js';
import bcrypt from 'bcryptjs';

const getUsers = async (_, response, next) => {
    try {
        const { rowCount, rows } = await database().query('SELECT * FROM users');
        if (rowCount === 0) throw new NotFoundError;
        return response.status(200).json(rows);
    } catch (error) {
        next(error)
    };
};

const registerUser = async (request, response, next) => {
    try {
        const { name, email, password } = request.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
    
        await database().query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [name, email, hashedPassword]);
        return response.sendStatus(201);
    } catch (error) {
        next(error)
    };
}

export {
    getUsers,
    registerUser
}