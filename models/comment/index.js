const mongoose = require('mongoose')
const {
  Types: { ObjectId }
} = mongoose.Schema

const Comment = new mongoose.Schema({
  nickname: {
    type: ObjectId,
    ref: 'Account'
  },
  text: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Comment', Comment)
