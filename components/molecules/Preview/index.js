import './index.scss'
import Marked from '../Marked'
import PropTypes from 'prop-types'

const Preview = ({ title, markdown }) => {
  return (
    <div className="preview__container">
      <h1 className="preview__title">{title}</h1>
      <Marked markdown={markdown} />
    </div>
  )
}

Preview.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string
}

export default Preview
