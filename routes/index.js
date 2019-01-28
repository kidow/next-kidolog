const router = require('express').Router()

router.use('/', require('./public'))
router.use('/prv', require('./private'))

module.exports = router
