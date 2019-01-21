const CustomError = require('@error')
const {
  Types: { ObjectId }
} = require('mongoose')

module.exports = (req, _, next) => {
  const { cursor } = req.query
  if (cursor && !ObjectId.isValid(cursor)) {
    return next(new CustomError('ObjectId invalid.', 400))
  }
  return next()
}
