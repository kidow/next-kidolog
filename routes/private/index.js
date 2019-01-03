const router = require('express').Router()
const { checkLogin } = require('@middle')

const auth = require('./auth')
const posts = require('./posts')

router.use('/auth', auth)
router.use('/posts', checkLogin, posts)

module.exports = router
