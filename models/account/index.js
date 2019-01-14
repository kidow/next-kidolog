const mongoose = require('mongoose')

const Account = new mongoose.Schema(
  {
    email: String,
    nickname: String,
    password: String,
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
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Account', Account)
