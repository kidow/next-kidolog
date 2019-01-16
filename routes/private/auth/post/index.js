const router = require('express').Router()

router.post('/login', require('./login'))

module.exports = router
