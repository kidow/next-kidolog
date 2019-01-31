const User = require('@models/user')

module.exports = async (req, res) => {
  const { user } = req

  if (!user) return res.status(401)

  try {
    const exists = await User.findById(user._id)
    if (!exists) {
      res.cookies('access_token', null, { maxAge: 0, httpOnly: true })
      res.sendStatus(401)
    }
  } catch (e) {
    next(e)
  }

  res.json(user)
}
