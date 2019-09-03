module.exports = function(reqBody) {
  const post = new this(reqBody)
  return post.save()
}
