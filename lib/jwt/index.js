const { JWT_SECRET } = process.env
const jwt = require('jsonwebtoken')

exports.encodeToken = payload => {
  const options = {
    expiresIn: '7d',
    issuer: 'kidolog.com'
  }
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, options, (err, token) => {
      if (err) return reject(err)
      resolve(token)
    })
  })
}

exports.decodeToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) return reject(err)
      resolve(decoded)
    })
  })
}
