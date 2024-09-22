
import { Hono, Context } from 'hono';

// Contoh kode untuk handler: UserHandler
const app = new Hono();
app.get('/', async(c: Context) => {
  c.text('Hello, World!');
});
  