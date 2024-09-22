
import { Hono, Context } from 'hono';

// Contoh kode untuk handler: AuthHandler
const app = new Hono();
app.get('/', async(c: Context) => {
  c.text('Hello, World!');
});

export default app;
  