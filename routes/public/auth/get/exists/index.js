const router = require('express').Router()

router.get('/email/:email', require('./_email'))
router.get('/nickname/:nickname', require('./_nickname'))

module.exports = router
