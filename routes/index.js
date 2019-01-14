const router = require('express').Router()

router.use('/prv', require('./private'))
router.use('/', require('./public'))

module.exports = router
