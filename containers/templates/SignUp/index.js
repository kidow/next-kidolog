import { SignUpTemplate } from 'components/templates'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'

class SignUpTemplateContainer extends React.Component {
  onChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({ name, value, form: 'register' })
  }
  checkEmail = () => {}
  checkNickname = () => {}
  onFacebookSignUp = () => {
    const { AuthActions } = this.props
    AuthActions.facebookSignup()
  }
  onGoogleSignUp = () => {
    const { AuthActions } = this.props
    AuthActions.googleSignup()
  }
  render() {
    const { email, password, nickname, error } = this.props
    const { onChange } = this
    return (
      <SignUpTemplate
        email={email}
        password={password}
        nickname={nickname}
        onChange={onChange}
        error={error}
      />
    )
  }
}

export default connect(
  ({ auth }) => ({
    form: auth[('register', 'form')],
    error: auth[('register', 'error')],
    exists: auth[('register', 'exists')],
    result: auth.result
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(SignUpTemplateContainer)
