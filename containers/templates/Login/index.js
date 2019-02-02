import { LoginTemplate } from 'components/templates'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'

class LoginTemplateContainer extends React.Component {
  onChange = e => {
    const { AuthActions, form } = this.props
    const { name, value } = e.target
    AuthActions.changeInput({ name, value, form })
  }
  render() {
    const { email, password, error } = this.props
    const { onChange } = this
    return (
      <LoginTemplate onChange={onChange} email={email} password={password} />
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
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(LoginTemplateContainer)
