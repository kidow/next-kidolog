const Joi = require('joi')
const CustomError = require('@error')
const User = require('@models/user')

// POST /prv/auth/login/local
module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .max(20)
      .required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  const { email, password } = req.body

  try {
    const user = await User.findByEmail(email)
    if (!user) return next(new CustomError('user is not exists.'))
    const validated = await user.validatePassword(password)
    if (!validated) return next(new CustomError('password is not validated.'))
    const accessToken = await user.encodeToken()
    res.cookie('access_token', accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    })
    res.json(user)
  } catch (err) {
    return next(err)
  }
}
