module.exports = function(nickname) {
  return this.findOne({ nickname }).exec()
}
