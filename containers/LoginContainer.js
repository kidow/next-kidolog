import React, { Component } from 'react'
import { Login } from 'components/organisms'
import Router from 'next/router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

class LoginContainer extends Component {
  onChangePassword = e => {
    const { AuthActions } = this.props
    const { value } = e.target
    AuthActions.changePassword(value)
  }

  onLogin = async () => {
    const { AuthActions, password } = this.props
    try {
      await AuthActions.login(password)
      localStorage.logged = 'true'
      Router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  onKeyPress = e => {
    if (e.key === 'Enter') {
      this.onLogin()
    }
  }

  render() {
    const { password } = this.props
    const { onChangePassword, onKeyPress } = this
    return (
      <Login
        onKeyPress={onKeyPress}
        password={password}
        onChangePassword={onChangePassword}
      />
    )
  }
}

export default connect(
  state => ({
    password: state.auth.get('password')
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(LoginContainer)
