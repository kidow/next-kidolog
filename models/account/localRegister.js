const bcrypt = require('bcrypt')

module.exports = function({ nickname, email, password }) {
  const account = new this({
    nickname,
    email,
    password: bcrypt.hashSync(password, 12)
  })

  return account.save()
}
