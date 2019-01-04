import './index.scss'
import Link from 'next/link'

const Logo = ({ theme }) => {
  return (
    <div className="logo__container">
      <Link href="/">
        <div className={theme}>Kidolog</div>
      </Link>
    </div>
  )
}

export default Logo
