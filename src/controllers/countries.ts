import { Request, Response, Router } from 'express';
import countries, { Order } from 'models/country';

const Controller: Router = Router();

Controller.get('/', async (req: Request, res: Response) => {
  try {
    const { filter, order } = req.query;
    if (typeof filter === 'string') {
      res.status(200).send(countries(filter, order as Order));
    } else {
      res.status(400).send('Bad filter parameter');
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

export default Controller;
