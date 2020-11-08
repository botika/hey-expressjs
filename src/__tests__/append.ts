import request from 'supertest';
import app from '../app';

it('Request /append?start=imm&end=fly', async () => {
  const result = await request(app).get('/append?start=imm&end=fly').send();

  expect(result.status).toBe(200);
  expect(result.body).toStrictEqual([
    'imm',
    ...JSON.parse(process.env.SIMPLE_ARRAY as string),
    'fly',
  ]);
});

it('Request /append?start=&end=fly', async () => {
  const result = await request(app).get('/append?start=&end=fly').send();

  expect(result.status).toBe(200);
  expect(result.body).toStrictEqual([
    '',
    ...JSON.parse(process.env.SIMPLE_ARRAY as string),
    'fly',
  ]);
});

it('Request /append?start=imm&end=', async () => {
  const result = await request(app).get('/append?start=imm&end=').send();

  expect(result.status).toBe(200);
  expect(result.body).toStrictEqual([
    'imm',
    ...JSON.parse(process.env.SIMPLE_ARRAY as string),
    '',
  ]);
});

it('Request /append?start=b', async () => {
  const result = await request(app).get('/append?start=b').send();

  expect(result.status).toBe(400);
  expect(result.text).toEqual('Bad parameters');
});

it('Request /append?end=b', async () => {
  const result = await request(app).get('/append?end=b').send();

  expect(result.status).toBe(400);
  expect(result.text).toEqual('Bad parameters');
});
