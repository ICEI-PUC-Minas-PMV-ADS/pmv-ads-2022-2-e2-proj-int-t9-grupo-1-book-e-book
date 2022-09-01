import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import database from './config/database.js';
import testConnection from './utils/check-db-connection.js';

testConnection(database);

const app = express();
const port = process.env.APP_PORT;


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});