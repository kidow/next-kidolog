import './index.scss'
import PropTypes from 'prop-types'

const IconButton = ({ IconName, onClick, children, ...rest }) => (
  <div className="icon-button" onClick={onClick}>
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
