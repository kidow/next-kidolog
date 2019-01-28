const router = require('express').Router()
const { checkLogin } = require('@middle')

router.use('/auth', require('./auth'))
router.use('/admin', checkLogin, require('./admin'))
router.use('/posts', require('./posts'))

module.exports = router
