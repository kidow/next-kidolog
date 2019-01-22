import { Header } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as authActions from 'store/auth'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.checkLogged()
  }

  checkLogged = () => {
    const { AuthActions } = this.props
    AuthActions.check()
  }
  render() {
    const { logged } = this.props
    return <Header logged={logged} />
  }
}

export default connect(
  ({ auth }) => ({
    logged: auth.logged
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(HeaderContainer)
