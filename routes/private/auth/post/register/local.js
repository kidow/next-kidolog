const Joi = require('joi')
const CustomError = require('@error')
const User = require('@models/user')

// POST /prv/auth/register/local/
module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    nickname: Joi.string()
      .regex(/^[a-zA-Z0-9ㄱ-힣]{3,12}$/)
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  try {
    const exists = await User.findByEmailOrNickname(req.body)
    if (exists)
      return res.status(409).json({
        key: exists.email === req.body.email ? 'email' : 'nickname'
      })
    const user = await User.localRegister(req.body)
    const accessToken = await user.encodeToken()
    res.cookie('access_token', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    })
    res.json(user.profile)
  } catch (err) {
    return next(err)
  }
}
