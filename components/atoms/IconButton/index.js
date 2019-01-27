import styles from './index.scss'
import PropTypes from 'prop-types'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

const IconButton = ({
  IconName,
  onClick,
  children,
  theme = 'default',
  ...rest
}) => (
  <div className={cx('icon-button', theme)} onClick={onClick}>
    <IconName className="icon" {...rest} />
    {children}
  </div>
)

IconButton.propTypes = {
  IconName: PropTypes.func,
  onClick: PropTypes.func,
  children: PropTypes.node
}

export default IconButton
