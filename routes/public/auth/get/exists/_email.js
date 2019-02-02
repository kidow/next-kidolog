const Joi = require('joi')
const CustomError = require('@error')
const User = require('@models/user')

// GET /exists/email/:email/
module.exports = async (req, res, next) => {
  const { email } = req.params

  if (!email) return next(new CustomError('email is not exists.'))

  try {
    const user = await User.findByEmail(email)
    res.json({ exists: !!user })
  } catch (err) {
    return next(err)
  }
}
