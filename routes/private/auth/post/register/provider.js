const Joi = require('joi')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    nickname: Joi.string()
      .regex(/^[a-zA-Z0-9ㄱ-ㅎ가-힣]{3,12}$/)
      .required(),
    accessToken: Joi.string().required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  const { provider } = req.params
  const { accessToken, nickname } = req.body

  try {
    const profile = await getProfile(provider, accessToken)
    if (!profile) return next(new CustomError('profile is not exists.'))
    const { email, id: socialId } = profile
    if (email) {
      const exists = await User.findByEmail(email)
      if (exists) {
        res.json({ key: 'email' })
        return next(new CustomError('email is exists.', 409))
      }
    }
    const exists = await User.findByNickname(nickname)
    if (exists) {
      res.json({ key: 'nickname' })
      return next(new CustomError('nickname is exists.', 409))
    }
    const user = await User.socialRegister({
      nickname,
      email,
      provider,
      accessToken,
      socialId
    })
    const socialToken = await user.encodeToken()
    res.cookies('access_token', socialToken, {
      maxAge: 1000 * 60 * 60 * 24 * 7,
      httpOnly: true
    })
    res.json(user)
  } catch (err) {
    return next(err)
  }
}
