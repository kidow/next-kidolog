const mongoose = require('mongoose')

const Account = new mongoose.Schema(
  {
    nickname: String,
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
