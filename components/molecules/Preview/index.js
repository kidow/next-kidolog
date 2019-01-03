import './index.scss'
import Marked from '../Marked'

const Preview = ({ title, markdown }) => {
  return (
    <div className="preview__container">
      <h1 className="preview__title">{title}</h1>
      <Marked markdown={markdown} />
    </div>
  )
}

export default Preview
