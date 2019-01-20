const router = require('express').Router()
const { checkObjectId, checkCursor } = require('@middle')

router.get('/', checkCursor, require('./_'))
router.get('/:id', checkObjectId, require('./_id'))

module.exports = router
