module.exports = function({ cursor, tag, search }) {
  const query = Object.assign(
    {},
    cursor ? { _id: { $lt: cursor } } : {},
    tag ? { tags: new RegExp(tag, 'ig') } : {},
    search ? { title: new RegExp(search, 'ig') } : {}
  )

  return this.find(query)
    .sort({ _id: -1 })
    .limit(6)
    .exec()
}
