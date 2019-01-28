require('dotenv').config()
const express = require('express')
const next = require('next')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const route = require('./lib/next-routes')
const helmet = require('helmet')
const hpp = require('hpp')
const { PORT, NODE_ENV, COOKIE_KEY } = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = route.getRequestHandler(app)

app.prepare().then(() => {
  const server = express()

  require('./lib/moduleAlias')
  require('./models')()

  if (NODE_ENV === 'development') {
    server.use(morgan('dev'))
  } else {
    server.use(helmet())
    server.use(hpp())
  }
  server.use(express.json())
  server.use(express.urlencoded({ extended: false }))
  server.use(cookieParser(COOKIE_KEY))
  server.use(require('@lib/session'))
  server.use(require('@lib/jwt').jwtMiddleware)
  server.use('/', require('./routes'))
  server.use(require('@middle/error'))

  server.get('*', (req, res) => handle(req, res))

  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
