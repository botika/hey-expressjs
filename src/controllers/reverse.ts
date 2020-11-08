import { Request, Response, Router } from 'express';

const Controller: Router = Router();

Controller.get('/:value', async (req: Request, res: Response) => {
  const { value } = req.params;
  res.status(200).send(
    value
      .split('')
      .map((x) => {
        if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
          return x.toUpperCase();
        }
        return x;
      })
      .reverse()
      .join(''),
  );
});

export default Controller;
