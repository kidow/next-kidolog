import { Header } from 'components/organisms'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from 'store/admin'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.checkLogged()
  }

  checkLogged = () => {
    const { AdminActions } = this.props
    AdminActions.check()
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
    AdminActions: bindActionCreators(adminActions, dispatch)
  })
)(HeaderContainer)
