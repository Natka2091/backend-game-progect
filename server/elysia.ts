import { Elysia } from 'elysia';
import { node } from '@elysiajs/node';

import { questController } from './controllers/quest.controller.js';
import { orderController } from './controllers/order.controller.js';

const PORT = 1000;

const app = new Elysia({ adapter: node() })
  .get('/', () => {
    return 'Escape Room API is running!';
  }) //delete
  .use(questController)
  .use(orderController)
  .listen(PORT, ({ hostname, port }) => {
    console.log(`Elysia server running at http://${hostname}:${port}`);
  });