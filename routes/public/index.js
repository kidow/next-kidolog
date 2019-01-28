const router = require('express').Router()

router.use('/auth', require('./auth'))
router.use('/admin', require('./admin'))
router.use('/posts', require('./posts'))

module.exports = router
