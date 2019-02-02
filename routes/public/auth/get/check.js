const User = require('@models/user')

// GET /exists/check/
module.exports = async (req, res, next) => {
  const { user } = req

  if (!user) return res.status(401)

  try {
    const exists = await User.findById(user._id)
    if (!exists)
      return res
        .cookies('access_token', null, {
          maxAge: 0,
          httpOnly: true
        })
        .status(401)
    res.json(user)
  } catch (err) {
    next(err)
  }
}
