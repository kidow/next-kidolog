const bcrypt = require('bcrypt')

module.exports = function({ nickname, email, password }) {
  const user = new this({
    profile: { nickname },
    email,
    password: bcrypt.hashSync(password, 12)
  })

  return user.save()
}
