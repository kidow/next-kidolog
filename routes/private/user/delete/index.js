const router = require('express').Router()

router.delete('/logout', require('./logout'))

module.exports = router
