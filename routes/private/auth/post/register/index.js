const router = require('express').Router()

router.post('/local', require('./local'))
router.post('/kakao', require('./kakao'))
router.post('/facebook', require('./facebook'))
router.post('/naver', require('./naver'))
router.post('/github', require('./github'))
router.post('/google', require('./google'))

module.exports = router
