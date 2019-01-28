import { Admin } from 'components/organisms'
import Router from 'next/router'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as adminActions from 'store/admin'

class AdminContainer extends React.Component {
  onChangePassword = e => {
    const { AdminActions } = this.props
    const { value } = e.target
    AdminActions.changePassword(value)
  }

  onLogin = async () => {
    const { AdminActions, password } = this.props
    try {
      await AdminActions.login(password)
      localStorage.logged = 'true'
      Router.push('/')
    } catch (e) {
      console.log(e)
    }
  }

  onKeyPress = e => {
    if (e.key === 'Enter') this.onLogin()
  }

  render() {
    const { password } = this.props
    const { onChangePassword, onKeyPress } = this
    return (
      <Admin
        onKeyPress={onKeyPress}
        password={password}
        onChangePassword={onChangePassword}
      />
    )
  }
}

export default connect(
  ({ admin }) => ({
    password: admin.password
  }),
  dispatch => ({
    AdminActions: bindActionCreators(adminActions, dispatch)
  })
)(AdminContainer)
