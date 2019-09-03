const mongoose = require('mongoose')
const {
  Types: { ObjectId }
} = mongoose.Schema

const Comment = new mongoose.Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  parentId: {
    type: ObjectId,
    ref: 'Comment'
  },
  postId: {
    type: ObjectId,
    ref: 'Post'
  },
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

Comment.static.write = require('./write')
Comment.static.list = require('./list')

module.exports = mongoose.model('Comment', Comment)
