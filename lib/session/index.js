const session = require('express-session')
const RedisStore = require('connect-redis')(session)
const {
  COOKIE_KEY: secret,
  REDIS_HOST: host,
  REDIS_PORT: port,
  REDIS_PASSWORD: pass
} = process.env

module.exports = session({
  resave: true,
  saveUninitialized: false,
  secret,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    secure: false
  },
  store: new RedisStore({
    host,
    port,
    pass,
    logErrors: true
  })
})
