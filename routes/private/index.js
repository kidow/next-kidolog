const router = require('express').Router()
const { checkLogin } = require('@middle')

router.use('/auth', require('./auth'))
router.use('/posts', checkLogin, require('./posts'))

module.exports = router
