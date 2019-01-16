const router = require('express').Router()
const upload = require('@multer')

router.post('/', require('./_'))
router.post('/image', upload.single('img'), require('./image'))
router.post('/thumbnail', upload.single('thumb'), require('./thumbnail'))

module.exports = router
