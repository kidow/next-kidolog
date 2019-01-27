import './index.scss'
import { Button, Logo } from 'components/atoms'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = ({ logged }) => {
  return (
    <div className="header__container">
      <div className="header__content">
        <Logo />
        {logged && (
          <Link href="/editor">
            <Button>새 포스트</Button>
          </Link>
        )}
        {!logged && (
          <Link href="/login">
            <Button>로그인</Button>
          </Link>
        )}
      </div>
      <div className="header__divider" />
    </div>
  )
}

Header.propTypes = {
  logged: PropTypes.bool
}

export default Header
