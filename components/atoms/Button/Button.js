import styles from './Button.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const Button = ({ children, theme, ...rest }) => {
  return (
    <div className={cx('button__container', theme)} {...rest}>
      {children}
    </div>
  )
}

export default Button
