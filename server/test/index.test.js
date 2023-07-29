const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

describe('Test de RUTAS', () => {
  describe('GET /rickandmorty/character/:id', () => {
    it('Responde con status: 200', async () => {
      const response = await agent.get('/rickandmorty/character/1');
      expect(response.statusCode).toBe(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get('/rickandmorty/character/1');
      expect(body).toHaveProperty(
        'id' &&
          'name' &&
          'species' &&
          'gender' &&
          'status' &&
          'origin' &&
          'image'
      );
    });

    it('Si hay un error responde con status: 500', async () => {
      await agent.get('/rickandmorty/character/-1').expect(500);
    });
  });

  describe('GET /rickandmorty/login', () => {
    it('Responde con las credenciales correctas', async () => {
      const { body } = await agent.get(
        '/rickandmorty/login?email=hola@mail.com&password=hola123'
      );
      expect(body).toEqual({
        access: true,
      });
    });

    it('Responde con las credenciales incorrectas', async () => {
      const { body } = await agent.get(
        '/rickandmorty/login?email=pepito@mail.com&password=123hola'
      );
      expect(body.access).toBeFalsy();
    });
  });

  describe('POST /rickandmorty/fav', () => {
    const character1 = {
      id: 1,
      name: 'Franco',
    };

    const character2 = {
      id: 2,
      name: 'Nahuel',
    };

    it('Devuelve un array creado con base en el personaje enviado', async () => {
      const { body } = await agent.post('/rickandmorty/fav').send(character1);

      expect(body).toBeInstanceOf(Array);
      expect(body).toContainEqual(character1);
    });

    it('Si se envía otro personaje, devuelve un array con los anteriores', async () => {
      const { body } = await agent.post('/rickandmorty/fav').send(character2);

      expect(body).toBeInstanceOf(Array);
      expect(body).toContainEqual(character1);
      expect(body).toContainEqual(character2);
    });
  });

  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Debe devolver el arreglo sin modificar si no encuentra el ID', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/3');
      expect(body).toBeInstanceOf(Array);
      expect(body).toEqual([
        {
          id: 1,
          name: 'Franco',
        },

        {
          id: 2,
          name: 'Nahuel',
        },
      ]);
    });

    it('Elimina correctamente el personaje', async () => {
      const { body } = await agent.delete('/rickandmorty/fav/1');
      expect(body).toBeInstanceOf(Array);
      expect(body).toEqual([
        {
          id: 2,
          name: 'Nahuel',
        }
      ])
    })
  });
});
