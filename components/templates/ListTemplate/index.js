import './index.scss'
import PropTypes from 'prop-types'

const ListTemplate = ({ children }) => {
  return <div className="list-template">{children}</div>
}

ListTemplate.propTypes = {
  children: PropTypes.node
}

export default ListTemplate
