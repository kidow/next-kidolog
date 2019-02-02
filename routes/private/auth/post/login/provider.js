const Joi = require('joi')
const CustomError = require('@error')

// POST /prv/auth/login/:provider(facebook|google|github|naver|kakao)
module.exports = async (req, res, next) => {
  const schema = Joi.object().keys({
    accessToken: Joi.string().required()
  })
  const { error } = Joi.validate(req.body, schema)
  if (error) return next(error)

  const { provider } = req.params
  const { accessToken } = req.body

  try {
    const profile = await getProfile(provider, accessToken)
    if (!profile) return next(new CustomError('profile is not exists.', 403))
    const { id, email } = profile
    const user = await User.findBySocialId({ provider, id })
    if (user) {
      const socialToken = await user.encodeToken()
      res.cookie('access_token', socialToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      })
      return res.json(user)
    }
    if (!user && email) {
      const duplicated = await User.findByEmail(email)
      if (duplicated) {
        duplicated.social[provider] = {
          id,
          accessToken
        }
        await duplicated.save()
        const socialToken = await user.encodeToken()
        res.cookie('access_token', socialToken, {
          maxAge: 1000 * 60 * 60 * 24 * 7,
          httpOnly: true
        })
        res.json(duplicated)
      }
    }
    if (user) return next(new CustomError('user is not exists.', 204))
  } catch (err) {
    return next(err)
  }
}
