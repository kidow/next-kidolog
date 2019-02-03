const router = require('express').Router()

router.get('/check', require('./check'))

module.exports = router
