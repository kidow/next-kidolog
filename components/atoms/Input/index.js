import './index.scss'
import PropTypes from 'prop-types'

const Input = ({ theme, ...rest }) => {
  return (
    <input
      className={theme}
      autoComplete="off"
      autoCapitalize="off"
      {...rest}
    />
  )
}

Input.propTypes = {
  theme: PropTypes.string
}

export default Input
