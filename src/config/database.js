import dotenv from 'dotenv';
dotenv.config();
import pg from 'pg';
const { Pool, Client } = pg;

export default () => new Client(process.env.PSQL_CONNECTION);