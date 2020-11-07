import {NextFunction, Request, Response, Router} from 'express';
import countries, {Order} from '../models/country';

const Controller: Router = Router();

Controller.get('/', async (req: Request, res: Response) => {
  try {
    const filter = req.query.filter;
    if (typeof filter === 'string') {
      const order: Order = req.query.order as Order;
      res.status(200).send(countries(filter, order));
    } else {
      res.status(400).send('Bad filter parameter');
    }
  } catch (e) {
      res.status(400).send(e.message);
  }
});

export default Controller;
