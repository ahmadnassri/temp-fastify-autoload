import app from './server.js'

app.ready(err => {
  if (err) throw err

  const pluginsKey = Symbol.for('registered-plugin')
  const plugins = app[pluginsKey]

  console.log(plugins)
})