const router = require('express').Router()

const private = require('./private')
const public = require('./public')

router.use('/prv', private)
router.use('/', public)

module.exports = router
