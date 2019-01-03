import './index.scss'
import { TiWarningOutline } from 'react-icons/ti'
import { Icon } from 'components/atoms'

const NotFound = () => {
  return (
    <div className="not-found">
      <Icon Name={TiWarningOutline} size={55} className="icon" />
      <h2>잘못된 페이지입니다.</h2>
    </div>
  )
}

export default NotFound
