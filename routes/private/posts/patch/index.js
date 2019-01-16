const router = require('express').Router()
const { checkObjectId } = require('@middle')

router.patch('/:id', checkObjectId, require('./update'))

module.exports = router
