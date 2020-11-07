import { Request, Response, Router } from 'express';
import countries, { Order } from 'models/country';

const Controller: Router = Router();

Controller.get('/:value', async (req: Request, res: Response) => {
    const value = req.params.value;
    res.status(200).send(value.split('').reverse().join(''))
});

export default Controller;
