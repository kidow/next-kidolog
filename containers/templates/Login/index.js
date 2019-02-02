import { LoginTemplate } from 'components/templates'
import Router from 'next/router'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'
import * as userActions from 'store/user'

class LoginTemplateContainer extends React.Component {
  onChange = e => {
    const { AuthActions, form } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({ name, value, form: 'login' })
  }

  setError = message => {
    const { AuthActions } = this.props
    AuthActions.setError({ form: 'login', message })
  }

  localLogin = async () => {
    const { form, AuthActions, UserActions } = this.props
    try {
      await AuthActions.localLogin(form)
      storage.set('loggedInfo', result)
      UserActions.setLoggedInfo(result)
      Router.push('/')
    } catch (err) {
      console.error(err)
      this.setError('잘못된 계정 정보입니다')
    }
  }

  onKeyPress = e => {
    if (e.key === 'Enter') this.localLogin()
  }

  render() {
    const { form, error } = this.props
    const { onChange, onKeyPress, localLogin } = this
    return (
      <LoginTemplate
        onChange={onChange}
        form={form}
        onKeyPress={onKeyPress}
        localLogin={localLogin}
      />
    )
  }
}

export default connect(
  ({ auth }) => ({
    form: auth.login.form,
    error: auth.login.error,
    result: auth.result
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(LoginTemplateContainer)
