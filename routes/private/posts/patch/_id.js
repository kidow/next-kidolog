const Post = require('@models/post')
const CustomError = require('@error')
const Joi = require('joi')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    title: Joi.string().required(),
    markdown: Joi.string().required(),
    thumbnail: Joi.string().empty(''),
    tags: Joi.array()
      .items(Joi.string())
      .required()
  })

  const result = Joi.validate(req.body, schema)

  if (result.error) return next(new CustomError('Joi error', 400))

  const { id } = req.params

  try {
    const post = await Post.findByIdAndUpdate(id, req.body, {
      new: true
    }).exec()
    if (!post) return next(new CustomError('404 Not Found', 404))

    res.json(post)
  } catch (err) {
    next(err)
  }
}
