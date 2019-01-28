const mongoose = require('mongoose')

const Account = new mongoose.Schema({
  email: String,
  password: String,
  nickname: { type: String, unique: true },
  social: {
    facebook: { id: String, accessToken: String },
    google: { id: String, accessToken: String },
    github: { id: String, accessToken: String },
    naver: { id: String, accessToken: String },
    kakao: { id: String, accessToken: String }
  },
  createdAt: { type: Date, default: Date.now }
})

Account.statics.findByEmail = require('./findByEmail')
Account.statics.findByNickname = require('./findByNickname')
Account.statics.findBySocialId = require('./findBySocialId')
Account.statics.localRegister = require('./localRegister')
Account.statics.socialRegister = require('./socialRegister')

Account.methods.validatePassword = require('./validatePassword')
Account.methods.encodeToken = require('./encodeToken')

module.exports = mongoose.model('Account', Account)
