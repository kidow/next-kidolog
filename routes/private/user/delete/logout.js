// DELETE /prv/user/logout/
module.exports = (_, res) => {
  res.clearCookie('access_token')
  res.sendStatus(204)
}
