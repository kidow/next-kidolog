import { SignUpTemplate } from 'components/templates'
import { isEmail, isLength } from 'validator'
import storage from 'lib/storage'
import Router from 'next/router'
import debounce from 'lodash/debounce'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'
import * as userActions from 'store/user'

class SignUpTemplateContainer extends React.Component {
  onChange = e => {
    const { AuthActions } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({ name, value, form: 'register' })

    const validation = this.validate[name][value]
    if (name.indexOf('password') > -1 || !validation) return

    const check = (name = 'email' ? this.checkEmail : this.checkNickname)
    check(value)
  }

  setError = message => {
    const { AuthActions } = this.props
    AuthActions.setError({ form: 'register', message })
  }

  validate = {
    email: value => {
      if (!isEmail(value)) {
        this.setError('잘못된 이메일 형식입니다')
        return false
      }
      return true
    },
    nickname: value => {
      if (!isLength(value, { min: 3, max: 12 })) {
        this.setError('닉네임은 4~12 사이로 입력해주세요')
        return false
      }
      return true
    },
    password: value => {
      if (!isLength(value, { min: 6 })) {
        this.setError('비밀번호를 6자리 이상 입력해주세요')
        return false
      }
      this.setError(null)
      return true
    }
  }

  checkEmail = debounce(async email => {
    const { AuthActions, exists } = this.props
    try {
      await AuthActions.checkEmailExists(email)
      if (exists.email) return this.setError('이미 존재하는 이메일입니다')
      else this.setError(null)
    } catch (err) {
      console.error(err)
    }
  }, 300)

  checkNickname = debounce(async nickname => {
    const { AuthActions, exists } = this.props
    try {
      await AuthActions.checkNicknameExists(nickname)
      if (exists.nickname) return this.setError('이미 존재하는 닉네임입니다')
      else this.setError(null)
    } catch (err) {
      console.error(err)
    }
  }, 300)

  localRegister = async () => {
    const { AuthActions, UserActions, form, error, result } = this.props
    const { email, nickname, password } = form
    const { validate } = this

    if (error) return
    if (
      !validate['email'](email) ||
      !validate['nickname'](nickname) ||
      !validate['password'](password)
    )
      return

    try {
      await AuthActions.localRegister(form)
      storage.set('loggedInfo', result)
      UserActions.setLoggedInfo(result)
      UserActions.setValidated(true)
      Router.push('/')
    } catch (err) {
      console.error(err)
      this.setError('알 수 없는 에러가 발생했습니다.')
    }
  }

  onKeyPress = e => {
    if (e.key === 'Enter') this.localRegister()
  }

  render() {
    const { form, error } = this.props
    const { onChange, onKeyPress, localRegister } = this
    return (
      <SignUpTemplate
        form={form}
        onChange={onChange}
        onKeyPress={onKeyPress}
        localRegister={localRegister}
        error={error}
      />
    )
  }
}

export default connect(
  ({ auth }) => ({
    form: auth.register.form,
    error: auth.register.error,
    exists: auth.register.exists,
    result: auth.result
  }),
  dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch),
    UserActions: bindActionCreators(userActions, dispatch)
  })
)(SignUpTemplateContainer)
