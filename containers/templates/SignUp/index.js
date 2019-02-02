import { SignUpTemplate } from 'components/templates'
import { isEmail, isLength } from 'validator'
import storage from 'lib/storage'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'

class SignUpTemplateContainer extends React.Component {
  onChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({ name, value, form: 'register' })
  }
  setError = message => {
    const { AuthActions } = this.props
    AuthActions.setError({ form: 'register', message })
  }
  checkEmail = async () => {
    const { AuthActions, email, exists } = this.props
    try {
      await AuthActions.checkEmailExists(email)
      if (exists.email) this.setError('이미 존재하는 이메일입니다.')
      else this.setError(null)
    } catch (err) {
      console.error(err)
    }
  }
  checkNickname = async () => {
    const { AuthActions, nickname, exists } = this.props
    try {
      await AuthActions.checkNicknameExists(nickname)
      if (exists.nickname) this.setError('이미 존재하는 닉네임입니다.')
      else this.setError(null)
    } catch (err) {
      console.error(err)
    }
  }
  localRegister = async () => {
    const { AuthActions, form, error } = this.props
    try {
      await AuthActions.localRegister(form)
    } catch (err) {
      console.error(err)
    }
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
