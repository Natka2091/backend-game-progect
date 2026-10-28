import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';

import { questController } from './controllers/quest.controller.js';
import { bookingController } from './controllers/booking.controller.js';

const PORT = 1000;

const app = new Elysia({ adapter: node() })
  .get('/', () => {
    return 'Escape Room API is running!';
  })
  .use(questController)
  .use(bookingController)
  .listen(PORT, ({ hostname, port }) => {
    console.log(`Elysia server running at http://${hostname}:${port}`);
  });