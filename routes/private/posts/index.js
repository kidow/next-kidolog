const router = require('express').Router()

router.use(require('./post'))
router.use(require('./patch'))
router.use(require('./delete'))

module.exports = router
