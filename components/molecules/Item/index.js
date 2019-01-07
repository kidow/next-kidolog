import './index.scss'
import moment from 'moment'
import 'moment/locale/ko'
import removeMd from 'remove-markdown'
import Link from 'next/link'

const Item = ({ title, markdown, createdAt, id, thumbnail, pending }) => {
  if (pending) {
    return <div className="item__loading" />
  } else {
    return (
      <div className="item__container">
        <Link href={`/post/${id}`}>
          <div
            className="item__image"
            style={{ backgroundImage: `url(${thumbnail})` }}
          >
            {thumbnail ? '' : '이미지가 없습니다'}
          </div>
        </Link>
        <div className="item__title">
          <Link href={{ pathname: `/post/${id}` }}>
            <a className="title__text">
              {title.length > 17 ? `${title.slice(0, 17)}...` : title}
            </a>
          </Link>
          <div className="title__date">{moment(createdAt).fromNow()}</div>
        </div>
        <div className="item__description">
          {removeMd(markdown).length > 120
            ? `${removeMd(markdown).slice(0, 120)}...`
            : removeMd(markdown)}
        </div>
      </div>
    )
  }
}

export default Item
