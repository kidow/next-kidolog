module.exports = function({ provider, id }) {
  const key = `social.${provider}.id`

  return this.findOne({ [key]: id })
}
