import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

import fastify from 'fastify'
import autoload from '@fastify/autoload'

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = fastify()

app.register(autoload, {
  dir: join(__dirname, 'plugins')
})

export default app