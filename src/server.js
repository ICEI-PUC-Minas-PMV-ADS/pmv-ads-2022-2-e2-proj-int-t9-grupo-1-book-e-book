import dotenv from 'dotenv';
dotenv.config();
import express from 'express';

const app = express();
const port = process.env.APP_PORT;

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
});