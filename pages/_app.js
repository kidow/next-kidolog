import React from 'react'
import App, { Container } from 'next/app'
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
  render() {
    const { Component, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(makeStore)(CustomApp)
