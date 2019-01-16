module.exports = (req, res) => {
  res.json({ logged: req.session.logged })
}
