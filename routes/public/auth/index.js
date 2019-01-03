const auth = require('express').Router()

auth.get('/check', require('./check'))

module.exports = auth
