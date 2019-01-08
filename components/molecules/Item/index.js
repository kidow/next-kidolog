import './index.scss'
import moment from 'moment'
import 'moment/locale/ko'
import removeMd from 'remove-markdown'
import Link from 'next/link'
import PropTypes from 'prop-types'

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
              {title.length > 37 ? `${title.slice(0, 37)}...` : title}
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

Item.propTypes = {
  title: PropTypes.string,
  markdown: PropTypes.string,
  createdAt: PropTypes.string,
  id: PropTypes.string,
  thumbnail: PropTypes.string,
  pending: PropTypes.bool
}

export default Item
