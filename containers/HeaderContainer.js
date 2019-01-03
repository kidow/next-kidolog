import React, { Component } from 'react'
import { Header } from 'components/organisms'

import { connect } from 'react-redux'

class HeaderContainer extends Component {
  render() {
    const { logged } = this.props
    return <Header logged={logged} />
  }
}

export default connect(
  state => ({
    logged: state.auth.get('logged')
  }),
  () => ({})
)(HeaderContainer)
