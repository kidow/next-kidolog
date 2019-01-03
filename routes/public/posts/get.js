const Post = require('@models/post')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const { id } = req.params

  try {
    const post = await Post.findById(id).exec()
    if (!post) {
      return next(new CustomError('404 Not Found', 0, 404))
    }
    res.json(post)
  } catch (err) {
    next(err)
  }
}
