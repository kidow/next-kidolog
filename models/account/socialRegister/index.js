module.exports = function({
  nickname,
  email,
  provider,
  accessToken,
  socialId
}) {
  const account = new this({
    nickname,
    email,
    social: {
      [provider]: {
        id: socialId,
        accessToken
      }
    }
  })

  return account.save()
}
