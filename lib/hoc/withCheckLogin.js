import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

const withCheckLogin = WrappedComponent => {
  return class extends Component {
    componentDidMount() {
      this.checkLogged()
    }

    checkLogged = async () => {
      const { AuthActions } = this.props
      AuthActions.check()
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default connect(
  null,
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(withCheckLogin)
