const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  webpack(config) {
    config.resolve.alias['styles'] = path.join(__dirname, 'lib/styles')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['containers'] = path.join(__dirname, 'containers')
    config.resolve.alias['store'] = path.join(__dirname, 'store')
    config.resolve.alias['api'] = path.join(__dirname, 'lib/api')
    config.resolve.alias['route'] = path.join(__dirname, 'route.js')
    return config
  }
})
