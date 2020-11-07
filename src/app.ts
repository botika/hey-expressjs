import express, { Application } from 'express';

import Countries from 'controllers/countries';

// Boot express
const app: Application = express();

// Application routing
app.use('/countries', Countries);

export default app;
