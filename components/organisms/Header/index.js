import './index.scss'
import { Button, Logo } from 'components/atoms'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Header = ({ logged }) => {
  return (
    <div className="header">
      <div className="header__content">
        <Logo />
        {logged && (
          <Link href="/editor">
            <Button>새 포스트</Button>
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
