import { LoginTemplate } from 'components/templates'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'

class LoginTemplateContainer extends React.Component {
  render() {
    return <LoginTemplate />
  }
}

export default LoginTemplateContainer
