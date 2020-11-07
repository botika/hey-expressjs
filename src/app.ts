import express, { Application } from 'express';

import Hello from 'controllers/hello';

// Boot express
const app: Application = express();

// Application routing
app.use('/', Hello);

export default app;
