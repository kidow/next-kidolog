module.exports = function({ title, markdown, tags, thumbnail }) {
  const post = new this({ title, markdown, tags, thumbnail })
  return post.save()
}
