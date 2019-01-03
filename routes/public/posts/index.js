const posts = require('express').Router()
const { checkObjectId, checkCursor } = require('@middle')

posts.get('/', checkCursor, require('./list'))
posts.get('/:id', checkObjectId, require('./get'))

module.exports = posts
