const { encodeToken } = require('@lib/jwt')

module.exports = function() {
  return encodeToken(
    {
      _id: this._id,
      profile: this.profile
    },
    'user'
  )
}
