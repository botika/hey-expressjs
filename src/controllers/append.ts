import { Request, Response, Router } from 'express';

const Controller: Router = Router();

function die() {
  console.error(
    'environment variable SIMPLE_ARRAY should be defined as non empty JSON string array',
  );
  process.exit(1);
}

function simpleArray(): string[] {
  let array: any[] = [];
  try {
    const env = process.env.SIMPLE_ARRAY as string;
    array = JSON.parse(env);
  } catch (_) {
    die();
  }
  if (array.length === 0) {
    die();
  }
  array.forEach((i) => {
    if (typeof i !== 'string') {
      die();
    }
  });

  return array as string[];
}

const SIMPLE_ARRAY = simpleArray();

Controller.get('/', async (req: Request, res: Response) => {
  const { start, end } = req.query;
  if (start === undefined || end === undefined) {
    res.status(400).send('Bad parameters');
  } else {
    res.status(200).send([start, ...SIMPLE_ARRAY, end]);
  }
});

export default Controller;
