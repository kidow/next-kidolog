const moduleAlias = require('module-alias')

moduleAlias.addAliases({
  '@lib': __dirname + '/../../lib',
  '@middle': __dirname + '/../../lib/middlewares',
  '@models': __dirname + '/../../models',
  '@error': __dirname + '/../../lib/error',
  '@multer': __dirname + '/../../lib/multer',
  '@aws': __dirname + '/../../lib/aws'
})
