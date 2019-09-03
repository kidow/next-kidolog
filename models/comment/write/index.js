module.exports = function(reqBody) {
  const comment = new this(reqBody)
  return comment.save()
}
