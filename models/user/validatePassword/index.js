const bcrypt = require('bcrypt')

module.exports = function(password) {
  return bcrypt.compareSync(password, this.password)
}
