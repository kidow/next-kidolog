const auth = require('express').Router()

auth.post('/login', require('./login'))

module.exports = auth
