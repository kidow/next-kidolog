module.exports = async (req, res) => {
  res.json({ logged: req.session.logged })
}
