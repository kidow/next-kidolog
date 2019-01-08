import './index.scss'
import PropTypes from 'prop-types'

const Tag = ({ children, ...rest }) => {
  return (
    <div className="tag__container" {...rest}>
      {children}
    </div>
  )
}

Tag.propTypes = {
  children: PropTypes.node
}

export default Tag
