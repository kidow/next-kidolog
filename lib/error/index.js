class CustomError extends Error {
  constructor(message, status) {
    super(message)
    this.message = message || 'Invalid error'
    this.status = status || 400
  }
}

module.exports = CustomError
