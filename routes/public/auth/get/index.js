const router = require('express').Router()

router.get('/check', require('./check'))

router.use('/exists', require('./exists'))

module.exports = router
