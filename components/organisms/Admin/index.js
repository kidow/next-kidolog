import './index.scss'
import { Input } from 'components/atoms'
import PropTypes from 'prop-types'

const Admin = ({ password, onChangePassword, onKeyPress }) => {
  return (
    <div className="admin__container">
      <div className="admin__box">
        <h2>로그인</h2>
        <div className="input">
          <Input
            onChange={onChangePassword}
            value={password}
            placeholder="비밀번호 입력"
            type="password"
            autoFocus
            onKeyPress={onKeyPress}
            theme="admin"
          />
        </div>
      </div>
    </div>
  )
}

Admin.propTypes = {
  password: PropTypes.string,
  onChangePassword: PropTypes.func,
  onKeyPress: PropTypes.func
}

export default Admin
