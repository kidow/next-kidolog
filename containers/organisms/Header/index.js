import { Header } from 'components/organisms'
import storage from 'lib/storage'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from 'store/admin'
import * as userActions from 'store/user'

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.checkAdminLogged()
    this.checkUserLogged()
  }

  checkAdminLogged = () => {
    const { AdminActions } = this.props
    AdminActions.check()
  }

  checkUserLogged = () => {
    const { UserActions } = this.props
    UserActions.checkStatus()
  }

  logout = async () => {
    const { UserActions } = this.props
    try {
      await UserActions.logout()
      storage.remove('loggedInfo')
      window.location.href = '/'
    } catch (err) {
      console.error(err)
    }
  }

  render() {
    const { adminLogged, userLogged } = this.props
    const { logout } = this
    return (
      <Header
        adminLogged={adminLogged}
        userLogged={userLogged}
        logout={logout}
      />
    )
  }
}

export default connect(
  ({ admin, user }) => ({
    adminLogged: admin.logged,
    userLogged: user.logged
  }),
  dispatch => ({
    AdminActions: bindActionCreators(adminActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(HeaderContainer)
