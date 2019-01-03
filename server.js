require('dotenv').config()
const express = require('express')
const next = require('next')
const morgan = require('morgan')
const session = require('express-session')
const cookieParser = require('cookie-parser')
const { PORT, NODE_ENV, COOKIE_KEY } = process.env

const port = parseInt(PORT, 10) || 3000
const dev = NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  require('./lib/moduleAlias')
  require('./models')()

  if (NODE_ENV === 'development') {
    server.use(morgan('dev'))
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
        secure: false
      }
    })
  )

  server.use('/', require('./routes'))

  server.use((err, req, res, next) => {
    if (err) {
      console.error(err)
      res.status(err.status)
    }
    res.json({ success: false, code: err.code, message: err.message })
  })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
