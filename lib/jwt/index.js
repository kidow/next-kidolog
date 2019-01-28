const { JWT_SECRET } = process.env
const jwt = require('jsonwebtoken')

const encodeToken = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiredIn: '7d' }, (err, token) => {
      if (err) return reject(err)
      resolve(token)
    })
  })
}

exports.encodeToken = encodeToken

const decodeToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return reject(err)
      resolve(decoded)
    })
  })
}

exports.jwtMiddleware = async (req, res, next) => {
  const token = req.cookies['access_token']
  if (!token) return next()

  try {
    const decoded = await decodeToken(token)

    if (Date.now() / 1000 - decoded.iat > 60 * 60 * 24) {
      const { _id } = decoded
      const newToken = await encodeToken({ _id }, 'account')
      res.cookie('access_token', newToken, {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
      })
    }
    req.contact = decoded
  } catch (e) {
    req.contact = null
  }

  return next()
}
