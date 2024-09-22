import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import {specs} from './libs';
import { swaggerUI } from '@hono/swagger-ui';


const app = new Hono().basePath('/api')
app.use(logger())

app.get('/docs', swaggerUI({ url: '/api/docs/json' }))
app.get('/docs/json', (c) => {
  return c.json(specs)
})


app.get('/', (c) => {
  return c.text('Hello Hono!')
})



const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
