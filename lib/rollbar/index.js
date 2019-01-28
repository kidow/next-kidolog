if (process.env.NODE_ENV === 'production') {
  var Rollbar = require('rollbar')
  var rollbar = new Rollbar({
    accessToken: process.env.ROLLBAR,
    captureUncaught: true,
    captureUnhandledRejections: true
  })

  // record a generic message and send it to Rollbar
  rollbar.log('Rollbar is watching Kidolog.')
}
