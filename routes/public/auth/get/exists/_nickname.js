const Joi = require('joi')
const CustomError = require('@error')
const User = require('@models/user')

module.exports = async (req, res, next) => {
  const { nickname } = req.params

  if (!nickname) return next(new CustomError('nickname is not exists.'))

  try {
    const user = await User.findByNickname(nickname)
    res.json({ exists: !!user })
  } catch (err) {
    return next(err)
  }
}
