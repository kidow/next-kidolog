module.exports = function({ nickname, email }) {
  return this.findOne({
    $or: [{ 'profile.nickname': nickname }, { email }]
  }).exec()
}
