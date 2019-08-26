require('dotenv').config()
const express = require('express')
const { PORT, NODE_ENV, COOKIE_KEY } = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = require('next')({ dev })
const handle = require('./lib/next-routes').getRequestHandler(app)

app.prepare().then(() => {
  const server = express()
  require('./lib/moduleAlias')
  require('@lib/rollbar')
  require('./models')()
  if (NODE_ENV === 'production') {
    server.use(require('helmet')())
    server.use(require('hpp')())
  }
  server.use(require('morgan')('dev'))
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(require('cookie-parser')(COOKIE_KEY))
  server.use(require('@lib/session'))
  server.use('/', require('./routes'))
  server.use(require('@middle/error'))
  server.all('/health', (_, res) => res.sendStatus(200))
  server.get('*', (req, res) => handle(req, res))
  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
