// POST /prv/posts/thumbnail/
module.exports = (req, res) => {
  res.json({ thumbnail: req.file.location })
}
