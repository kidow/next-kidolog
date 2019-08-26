const Post = require('@models/post')

module.exports = async (req, res, next) => {
  const { cursor, tag, search } = req.query

  try {
    const posts = await Post.list({ cursor, tag, search })
    const nextUrl =
      posts.length === 6
        ? `/posts/?${tag ? `tag=${tag}&` : ''}cursor=${posts[5]._id}${
            search ? `&search=${search}` : ''
          }`
        : null
    res.json({ next: nextUrl, posts })
  } catch (err) {
    next(err)
  }
}
