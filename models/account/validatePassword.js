const bcrypt = require('bcrypt')

module.exports = function(password) {
  return this.password === bcrypt.hashSync(password, 12)
}
