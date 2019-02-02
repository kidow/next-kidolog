const router = require('express').Router()
const { checkAdmin } = require('@middle')

router.use('/auth', require('./auth'))
router.use('/admin', checkAdmin, require('./admin'))
router.use('/posts', require('./posts'))
router.use('/user', require('./user'))

module.exports = router
