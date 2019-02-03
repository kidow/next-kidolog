// GET /user/check/
module.exports = (req, res) => {
  if (!req.user) return res.status(401)
  res.json(req.user.profile)
}
