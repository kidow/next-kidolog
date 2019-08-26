const Post = require('@models/post')
const Joi = require('joi')
const CustomError = require('@error')

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

  try {
    const post = await Post.write(req.body)
    res.json(post)
  } catch (err) {
    next(err)
  }
}
