const router = require('express').Router()
const { checkObjectId } = require('@middle')

router.delete('/:id', checkObjectId, require('./remove'))

module.exports = router
