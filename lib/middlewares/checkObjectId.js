const CustomError = require('@error')
const {
  Types: { ObjectId }
} = require('mongoose')

module.exports = (req, _, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id))
    return next(new CustomError('ObjectId invalid.', 400))

  return next()
}
