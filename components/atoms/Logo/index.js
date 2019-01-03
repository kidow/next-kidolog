import './index.scss'

const Logo = ({ theme }) => {
  return (
    <div className="logo__container">
      <div className={theme}>Kidolog</div>
    </div>
  )
}

export default Logo
