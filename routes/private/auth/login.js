const Joi = require('joi')
const CustomError = require('@error')

module.exports = async (req, res, next) => {
  const { password } = req.body

  if (Joi.validate(password, Joi.string().required()).error) {
    return next(new CustomError('Joi Error', 0, 400))
  }

  if (password === process.env.PASSWORD) {
    req.session.logged = true
    res.json({ success: true })
  } else {
    return next(new CustomError('패스워드가 일치하지 않습니다'))
  }
}
