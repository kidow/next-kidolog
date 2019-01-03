import styles from './Button.scss'
import classNames from 'classnames/bind'
import Link from 'next/link'

const cx = classNames.bind(styles)

const DivButton = ({ children, ...rest }) => <div {...rest}>{children}</div>

const Button = ({ children, to, onClick, theme }) => {
  const Element = to ? Link : DivButton
  return (
    <Element
      to={to}
      onClick={onClick}
      className={cx('button__container', theme)}
    >
      {children}
    </Element>
  )
}

export default Button
