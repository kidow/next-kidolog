const router = require('express').Router()

router.use(require('./post'))
router.use(require('./delete'))

module.exports = router
