module.exports = (req, res) => {
  res.json({
    thumbnail: req.file.location
  })
}
