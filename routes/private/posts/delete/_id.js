const Post = require('@models/post')

// DELETE /prv/posts/:id/
module.exports = async (req, res, next) => {
  const { id } = req.params

  try {
    await Post.findByIdAndRemove(id).exec()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}
