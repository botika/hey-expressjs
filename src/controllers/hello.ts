import {
  NextFunction, Request, Response, Router,
} from 'express';

const Controller: Router = Router();

Controller.get('/', async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).send({ data: 'Hello World!' });
  } catch (e) {
    next(e);
  }
});

export default Controller;
