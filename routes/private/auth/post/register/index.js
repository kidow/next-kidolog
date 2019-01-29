const router = require('express').Router()

router.post('/local', require('./local'))
router.post(
  '/:provider(facebook|google|github|naver|kakao)',
  require('./provider')
)

module.exports = router
