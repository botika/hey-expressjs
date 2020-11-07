import request from 'supertest';
import app from '../app';

describe('Test Countries', () => {
  it('Request /countries?filter=AT&order=asc', async () => {
    const result = await request(app).get('/countries?filter=AT&order=asc').send();

    expect(result.status).toBe(200);
    expect(result.body[0].code).toBe('AT');
  });

  it('Request /countries?filter=B&order=asc', async () => {
    const result = await request(app).get('/countries?filter=B&order=asc').send();

    expect(result.status).toBe(200);
    expect(result.body.map(({vat}) => vat)).toStrictEqual([20, 20, 21]);
  });

  it('Request /countries?filter=B&order=desc', async () => {
    const result = await request(app).get('/countries?filter=B&order=desc').send();

    expect(result.status).toBe(200);
    expect(result.body.map(({vat}) => vat)).toStrictEqual([21, 20, 20]);
  });
  it('Request /countries?order=asc', async () => {
    const result = await request(app).get('/countries?filter=&order=asc').send();

    expect(result.status).toBe(200);
    expect(result.body.length).toBe(28);
  });

  it('Request /countries?filter=B&order=bad', async () => {
    const result = await request(app).get('/countries?filter=B&order=bad').send();

    expect(result.status).toBe(400);
    expect(result.text).toContain('Bad');
    expect(result.text).toContain('order parameter');
  });

  it('Request /countries?filter=B', async () => {
    const result = await request(app).get('/countries?filter=B').send();

    expect(result.status).toBe(400);
    expect(result.text).toContain('Bad');
    expect(result.text).toContain('order parameter');
  });

  it('Request /countries?order=asc', async () => {
    const result = await request(app).get('/countries?&order=asc').send();

    expect(result.status).toBe(400);
    expect(result.text).toContain('Bad');
    expect(result.text).toContain('filter parameter');
  });
});
