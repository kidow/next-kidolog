const mongoose = require('mongoose')

const Post = new mongoose.Schema(
  {
    title: String,
    markdown: String,
    tags: [String],
    thumbnail: String
  },
  { timestamps: true }
)

Post.statics.write = require('./write')
Post.statics.list = require('./list')

module.exports = mongoose.model('Post', Post)
