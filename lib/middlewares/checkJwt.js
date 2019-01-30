const { generateToken, decodeToken } = require('@lib/jwt')

module.exports = async (req, res, next) => {
  const token = req.cookies['access_token']
  if (!token) {
    req.account = null
    return next()
  }

  try {
    const decoded = await decodeToken(token)

    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
      const { _id, profile } = decoded
      const newToken = await encodeToken({ _id, profile }, 'account')
      res.cookie('access_token', newToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      })
    }
    req.account = decoded
  } catch (e) {
    req.account = null
  }

  return next()
}
