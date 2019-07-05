import './index.scss'
import Marked from '../Marked'
import { useSelector } from 'react-redux'

const Preview = _ => {
  const { title, markdown } = useSelector(state => state.editor)
  return (
    <div className="preview__container">
      <h1 className="preview__title">{title}</h1>
      <Marked markdown={markdown} />
    </div>
  )
}

export default Preview
