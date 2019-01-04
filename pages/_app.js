import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import 'styles/index.scss'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import reducer from 'store'
import { composeWithDevTools } from 'redux-devtools-extension'
import penderMiddleware from 'redux-pender'

const makeStore = () =>
  createStore(reducer, composeWithDevTools(applyMiddleware(penderMiddleware())))

class CustomApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  render() {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Head>
          <title>Kidolog</title>
        </Head>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(CustomApp)
