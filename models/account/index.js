const mongoose = require('mongoose')

const Account = new mongoose.Schema({
  nickname: {
    type: String,
    unique: true
  },
  social: {
    facebook: {
      id: String,
      accessToken: String
    },
    google: {
      id: String,
      accessToken: String
    },
    github: {
      id: String,
      accessToken: String
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Account', Account)
