module.exports = (err, _req, res, _next) => {
  if (err) {
    console.error(err)
    res.status(err.status)
  }
  res.json({ success: false, message: err.message })
}
