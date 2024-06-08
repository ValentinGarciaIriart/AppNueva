const request = require('supertest');
const app = require('../app');

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
            .send({ num1: 5, num2: 3 });
        
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
        expect(response.body.error).toBe('Cannot divide by zero');
    });
});
