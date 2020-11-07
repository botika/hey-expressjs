import request from 'supertest';
import app from '../app';

it('Request /reverse/foo', async () => {
  const result = await request(app)
    .get('/reverse/foo')
    .send();

  expect(result.status).toBe(200);
  expect(result.text).toEqual('oof');
});
