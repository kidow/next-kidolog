module.exports = (req, res) =>
  res.json({
    image: `\n![${req.file.originalname}](${req.file.location})`
  })
