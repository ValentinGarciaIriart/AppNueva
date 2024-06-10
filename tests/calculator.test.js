const request = require('supertest');
const app = require('../app');  // Asegúrate de que este es el camino correcto a tu aplicación

let server;

beforeAll(done => {
  server = app.listen(3000, () => {
    console.log('Server is running on port 3000');
    done();
  });
});

afterAll(done => {
  server.close(() => {
    console.log('Server closed');
    done();
  });
});

describe('Calculator API', () => {
  it('should add two numbers', async () => {
    const response = await request(app)
      .post('/api/add')
      .send({ num1: 1, num2: 2 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(3);
  });

  it('should subtract two numbers', async () => {
    const response = await request(app)
      .post('/api/subtract')
      .send({ num1: 3, num2: 1 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  it('should multiply two numbers', async () => {
    const response = await request(app)
      .post('/api/multiply')
      .send({ num1: 2, num2: 3 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(6);
  });

  it('should divide two numbers', async () => {
    const response = await request(app)
      .post('/api/divide')
      .send({ num1: 6, num2: 3 });
    expect(response.status).toBe(200);
    expect(response.body.result).toBe(2);
  });

  it('should not divide by zero', async () => {
    const response = await request(app)
      .post('/api/divide')
      .send({ num1: 1, num2: 0 });
    expect(response.status).toBe(400);
  });
});
