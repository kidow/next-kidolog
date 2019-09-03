const mongoose = require('mongoose')

const User = new mongoose.Schema({
  nickname: {
    type: String,
    default: '',
    unique: true
  },
  provider: {
    type: String,
    default: ''
  },
  thumbnail: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', User)
