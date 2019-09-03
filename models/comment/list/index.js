module.exports = function({ postId, parentId, createdAt }) {
  return this.find({ postId })
    .sort({ _id: !parentId, parentId, createdAt })
    .exec()
}
