const { configureStore, getDefaultMiddleware } = require('@reduxjs/toolkit')
const postReducer = require('../feature/post/fetchPost')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const store = configureStore({
  reducer: {
    post: postReducer
  }
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

module.exports = store
