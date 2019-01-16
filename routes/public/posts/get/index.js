const router = require('express').Router()
const { checkObjectId, checkCursor } = require('@middle')

router.get('/', checkCursor, require('./list'))
router.get('/:id', checkObjectId, require('./get'))

module.exports = router
