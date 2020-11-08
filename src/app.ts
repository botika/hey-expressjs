import express, { Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Boot express
const app: Application = express();

// Application routing
app.use('/countries', require('controllers/countries').default);
app.use('/reverse', require('controllers/reverse').default);
app.use('/append', require('controllers/reverse').default);

export default app;
