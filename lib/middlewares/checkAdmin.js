const CustomError = require('@error')

module.exports = (req, _, next) => {
  const { logged } = req.session
  if (!logged) {
    return next(new CustomError('not logged.', 401))
  }
  return next()
}
