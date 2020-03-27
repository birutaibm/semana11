const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.migrate.rollback();
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app).post('/ongs').send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "16999995555",
      city: "Brodowski",
      uf: "SP"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toMatch(/^[\da-f]{8}$/);
  });

  it('should be able to log in', async () => {
    const name = 'APAD';
    const {body: ong} = await request(app).post('/ongs').send({
      email: "contato@apad.com.br",
      whatsapp: "16999995555",
      city: "Brodowski",
      uf: "SP",
      name,
    });
    const login = {id: ong.id};
    const response = await request(app).post('/sessions').send(login);

    expect(response.body).toHaveProperty('name');
    expect(response.body.name).toBe(name);
  });
});