module.exports = (req, res, next) => {
  res.cookies('access_token', null, { maxAge: 0, httpOnly: true })
  res.sendStatus(204)
}
