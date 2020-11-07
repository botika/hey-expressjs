import express, { Application } from 'express';

import Countries from 'controllers/countries';
import Reverse from 'controllers/reverse';

// Boot express
const app: Application = express();

// Application routing
app.use('/countries', Countries);
app.use('/reverse', Reverse);

export default app;
