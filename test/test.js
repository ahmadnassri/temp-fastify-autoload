import { test } from 'node:test'
import assert from 'node:assert'

import app from '../server.js'

test('plugin loaded', (t, done) => {

  app.ready(err => {
    assert.ok(app.hasPlugin('@fastify/cors'))

    app.close()

    done()
  })
})
