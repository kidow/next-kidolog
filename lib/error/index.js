class CustomError extends Error {
  constructor(message, ...codeStatus) {
    super(message)
    this.message = message || 'Invalid error'
    this.code = 0
    this.status = 500
    if (codeStatus.length === 1) {
      this.code = codeStatus[0]
    } else if (codeStatus.length === 2) {
      this.code = codeStatus[0]
      this.status = codeStatus[1]
    }
  }
}

module.exports = CustomError
