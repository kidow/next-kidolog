import './index.scss'
import PropTypes from 'prop-types'

const PostTemplate = ({ children }) => {
  return <div className="post-template">{children}</div>
}

PostTemplate.propTypes = {
  children: PropTypes.node
}

export default PostTemplate
