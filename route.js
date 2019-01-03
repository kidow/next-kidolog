const route = (module.exports = require('next-routes')())

route.add('tag', '/tag/:tag')
route.add('post', '/post/:id')
route.add('editor', '/editor/:id')
route.add('login')
