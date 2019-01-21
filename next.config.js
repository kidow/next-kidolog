const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const path = require('path')

module.exports = withTypescript(
  withSass(
    withCSS({
      webpack(config) {
        config.resolve.alias['components'] = path.join(__dirname, 'components')
        config.resolve.alias['containers'] = path.join(__dirname, 'containers')
        config.resolve.alias['lib'] = path.join(__dirname, 'lib')
        config.resolve.alias['store'] = path.join(__dirname, 'lib/store')
        config.resolve.alias['styles'] = path.join(__dirname, 'lib/styles')
        config.resolve.alias['api'] = path.join(__dirname, 'lib/api')
        return config
      }
    })
  )
)
