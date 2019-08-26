const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const path = require('path')

const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://www.kidolog.com'
    : 'http://localhost:3000'

module.exports = withSass(
  withCSS({
    webpack(config) {
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['lib'] = path.join(__dirname, 'lib')
      config.resolve.alias['store'] = path.join(__dirname, 'lib/store')
      config.resolve.alias['styles'] = path.join(__dirname, 'lib/styles')
      config.resolve.alias['api'] = path.join(__dirname, 'lib/api')
      return config
    },
    env: {
      BASE_URL
    }
  })
)
