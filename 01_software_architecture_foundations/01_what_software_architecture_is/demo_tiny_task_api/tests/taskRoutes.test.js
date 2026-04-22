import request from 'supertest';
import app from '../src/app.js';

describe('Task API Routes', () => {
  it('GET /api/tasks should return all tasks', async () => {
    const response = await request(app).get('/api/tasks');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it('GET /api/tasks/1 should return a single task', async () => {
    const response = await request(app).get('/api/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body.id).toBe(1);
  });

  it('GET /api/tasks/999 should return 404', async () => {
    const response = await request(app).get('/api/tasks/999');
    expect(response.status).toBe(404);
  });
});
