const mongoose = require('mongoose')

const Comment = new mongoose.Schema(
  {
    nickname: String,
    text: String
  },
  { timestamps: true }
)

module.exports = mongoose.model('Comment', Comment)
