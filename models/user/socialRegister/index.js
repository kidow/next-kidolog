module.exports = function({
  nickname,
  email,
  provider,
  accessToken,
  socialId
}) {
  const user = new this({
    nickname,
    email,
    social: {
      [provider]: {
        id: socialId,
        accessToken
      }
    }
  })

  return user.save()
}
