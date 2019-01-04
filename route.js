const nextRoutes = require('next-routes')
const route = (module.exports = nextRoutes())

route.add('tag', '/tag/:tag')
route.add('post', '/post/:id')
route.add('editor', '/editor/:id')
route.add('login')
