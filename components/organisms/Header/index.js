import './index.scss'
import { Button, Logo } from 'components/atoms'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = ({ userLogged, adminLogged, logout }) => {
  return (
    <div className="header__container">
      <div className="header__content">
        <Logo />
        <div style={{ display: 'flex' }}>
          {adminLogged && (
            <Link href="/editor">
              <Button>새 포스트</Button>
            </Link>
          )}
          {!userLogged ? (
            <Link href="/login">
              <Button>로그인</Button>
            </Link>
          ) : (
            <Button onClick={logout}>로그아웃</Button>
          )}
        </div>
      </div>
      <div className="header__divider" />
    </div>
  )
}

Header.propTypes = {
  userLogged: PropTypes.bool,
  adminLogged: PropTypes.bool
}

export default Header
