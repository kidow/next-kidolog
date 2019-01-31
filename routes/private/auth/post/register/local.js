const Joi = require('joi')
const CustomError = require('@error')
const User = require('@models/user')

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
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  const { email, nickname, password } = req.body

  try {
    const user = await User.localRegister(req.body)
    const accessToken = await user.encodeToken()
    res.cookies('access_token', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    })
    res.json(user)
  } catch (err) {
    next(err)
  }
}
