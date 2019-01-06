require('dotenv').config()
const express = require('express')
const next = require('next')
const morgan = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const route = require('./lib/next-routes')
const helmet = require('helmet')
const hpp = require('hpp')
const RedisStore = require('connect-redis')(session)
const {
  PORT,
  NODE_ENV,
  COOKIE_KEY,
  REDIS_HOST: host,
  REDIS_PORT,
  REDIS_PASSWORD: pass
} = process.env

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
  server.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: COOKIE_KEY,
      cookie: {
        maxAge: 8640000,
        secure: NODE_ENV === 'production'
      },
      store: new RedisStore({
        host,
        port: REDIS_PORT,
        pass,
        logErrors: true
      })
    })
  )

  server.use('/', require('./routes'))

  server.use((err, req, res, next) => {
    if (err) {
      console.error(err)
      res.status(err.status)
    }
    res.json({ success: false, message: err.message })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handle).listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
