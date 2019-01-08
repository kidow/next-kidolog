import styles from './index.scss'
import classNames from 'classnames/bind'
import PropTypes from 'prop-types'

const cx = classNames.bind(styles)

const Button = ({ children, theme = 'default', ...rest }) => {
  return (
    <div className={cx('button__container', theme)} {...rest}>
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  theme: PropTypes.string
}

export default Button
