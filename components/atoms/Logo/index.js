import './index.scss'
import Link from 'next/link'
import PropTypes from 'prop-types'

const Logo = ({ theme }) => {
  return (
    <div className="logo__container">
      <Link href="/">
        <div className={theme}>Kidolog</div>
      </Link>
    </div>
  )
}

Logo.propTypes = {
  theme: PropTypes.string
}

export default Logo
