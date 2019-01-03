const mongoose = require('mongoose')
const {
  Types: { ObjectId }
} = mongoose
const CustomError = require('@error')

exports.checkObjectId = (req, res, next) => {
  const { id } = req.params
  if (!ObjectId.isValid(id)) {
    return next(new CustomError('ObjectId invalid.', 0, 400))
  }
  return next()
}

exports.checkLogin = (req, res, next) => {
  const { logged } = req.session
  if (!logged) {
    return next(new CustomError('not logged.', 0, 401))
  }
  return next()
}

exports.checkCursor = (req, res, next) => {
  const { cursor } = req.query

  if (cursor && !ObjectId.isValid(cursor)) {
    return next(new CustomError('ObjectId invalid.', 0, 400))
  }
  return next()
}
