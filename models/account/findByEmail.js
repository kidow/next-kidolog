module.exports = function(email) {
  return this.findOne({ email }).exec()
}
