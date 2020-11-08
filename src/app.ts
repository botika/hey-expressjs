/* eslint-disable import/first */
import dotenv from 'dotenv';

dotenv.config();

import express, { Application } from 'express';
import Append from 'controllers/append';
import Countries from 'controllers/countries';
import Reverse from 'controllers/reverse';

// Boot express
const app: Application = express();

// Application routing
app.use('/countries', Countries);
app.use('/reverse', Reverse);
app.use('/append', Append);

export default app;
