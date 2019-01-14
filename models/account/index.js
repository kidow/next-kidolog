const mongoose = require('mongoose')

const Account = new mongoose.Schema({
  nickname: {
    type: String,
    unique: true
  },
  social: {
    Facebook: {
      id: String,
      accessToken: String
    },
    Google: {
      id: String,
      accessToken: String
    },
    Github: {
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
