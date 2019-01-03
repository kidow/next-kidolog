const posts = require('express').Router()
const { checkObjectId } = require('@middle')
const upload = require('@multer')

posts.post('/', require('./write'))
posts.post('/image', upload.single('img'), require('./image'))
posts.post('/thumbnail', upload.single('thumb'), require('./thumbnail'))
posts.delete('/:id', checkObjectId, require('./remove'))
posts.patch('/:id', checkObjectId, require('./update'))

module.exports = posts
