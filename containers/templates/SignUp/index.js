import { SignUpTemplate } from 'components/templates'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as authActions from 'store/auth'

class SignUpTemplateContainer extends React.Component {
  render() {
    return <SignUpTemplate />
  }
}

export default SignUpTemplateContainer
