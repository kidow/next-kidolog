import React from 'react'
import App from 'next/app'
import 'styles/index.scss'

import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import penderMiddleware from 'redux-pender'

const makeStore = () => {
  if (process.env.NODE_ENV === 'development') {
    return createStore(
      reducer,
      composeWithDevTools(applyMiddleware(penderMiddleware()))
    )
  } else {
    return createStore(reducer, compose(applyMiddleware(penderMiddleware())))
  }
}

class CustomApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withRedux(makeStore)(CustomApp)
