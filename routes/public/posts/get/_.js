const Post = require('@models/post')

// POST /posts/
module.exports = async (req, res, next) => {
  const { cursor, tag, search } = req.query

  let posts = null
  try {
    posts = await Post.list({ cursor, tag, search })
  } catch (err) {
    return next(err)
  }

  const nextUrl =
    posts.length === 6
      ? `/posts/?${tag ? `tag=${tag}&` : ''}cursor=${posts[5]._id}${
          search ? `&search=${search}` : ''
        }`
      : null

  res.json({ next: nextUrl, posts })
}
