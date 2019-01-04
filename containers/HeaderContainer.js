import React, { Component } from 'react'
import { Header } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

class HeaderContainer extends Component {
  componentDidMount() {
    this.checkLogged()
  }

  checkLogged = async () => {
    const { AuthActions } = this.props
    AuthActions.check()
  }
  render() {
    const { logged } = this.props
    return <Header logged={logged} />
  }
}

export default connect(
  state => ({
    logged: state.auth.get('logged')
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(HeaderContainer)
