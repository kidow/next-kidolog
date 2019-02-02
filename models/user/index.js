const mongoose = require('mongoose')

const User = new mongoose.Schema({
  email: String,
  password: String,
  profile: {
    nickname: String,
    thumbnail: { type: String, default: '/static/default_thumbnail.png' }
  },
  social: {
    facebook: { id: String, accessToken: String },
    google: { id: String, accessToken: String },
    github: { id: String, accessToken: String },
    naver: { id: String, accessToken: String },
    kakao: { id: String, accessToken: String }
  },
  createdAt: { type: Date, default: Date.now }
})

User.statics.findByEmail = require('./findByEmail')
User.statics.findByNickname = require('./findByNickname')
User.statics.findBySocialId = require('./findBySocialId')
User.statics.findByEmailOrNickname = require('./findByEmailOrNickname')
User.statics.localRegister = require('./localRegister')
User.statics.socialRegister = require('./socialRegister')

User.methods.validatePassword = require('./validatePassword')
User.methods.encodeToken = require('./encodeToken')

module.exports = mongoose.model('User', User)
