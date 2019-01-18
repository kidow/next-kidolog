const mongoose = require('mongoose')
const { NODE_ENV, MONGO_URI } = process.env

module.exports = () => {
  if (NODE_ENV === 'development') {
    mongoose.set('debug', true)
  }

  mongoose.connect(
    MONGO_URI,
    { dbName: 'kidolog', useNewUrlParser: true, useCreateIndex: true },
    err => {
      if (err) {
        console.error('mongoDB connecting error :', err)
      } else {
        console.log('mongoDB connected')
      }
    }
  )

  require('./post')
  require('./account')
  require('./comment')
}
