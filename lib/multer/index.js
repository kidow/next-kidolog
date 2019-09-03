const multer = require('multer')
const multerS3 = require('multer-s3')
const s3 = require('@aws/s3')

module.exports = multer({
  storage: multerS3({
    s3,
    bucket: process.env.AWS_S3_BUCKET,
    key(req, file, cb) {
      cb(null, Date.now().toString(36))
    }
  }),
  limits: { fileSize: 5 * 1024 * 1024 }
})
