import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';

const PORT = 1000;

const app = new Elysia({ adapter: node() })
  .get('/', () => {
    return 'Escape Room API is running!';
  })
  .get('/quests', () => {
    return [
      { id: 1, title: 'Crypt' },
      { id: 2, title: 'Maniac' },
    ];
  })
  .listen(PORT, ({ hostname, port }) => {
    console.log(`Elysia server running at http://${hostname}:${port}`);
  });