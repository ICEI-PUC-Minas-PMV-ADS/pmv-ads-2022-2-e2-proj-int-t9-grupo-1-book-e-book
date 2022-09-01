import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import database from './config/database.js';
import testConnection from './utils/check-db-connection.js';
import getBookRouter from './routers/bookRouter.js';
import errorMiddleware from './middlewares/error-middleware.js';

testConnection(database);

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use('/books', getBookRouter());
app.use(errorMiddleware);


app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});