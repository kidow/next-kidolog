import './index.scss'
import moment from 'moment'
import 'moment/locale/ko'
import removeMd from 'remove-markdown'
import { Router } from 'route'
import Link from 'next/link'

const Item = ({ title, markdown, createdAt, id, thumbnail }) => {
  return (
    <div className="item__container">
      <div
        className="item__image"
        style={{ backgroundImage: `url(${thumbnail})` }}
        onClick={() => Router.pushRoute('post', { id })}
      >
        {thumbnail ? '' : '이미지가 없습니다'}
      </div>
      <div className="item__title">
        <Link
          as={{ pathname: `/post/${title}` }}
          href={{ pathname: `/post/${id}` }}
        >
          <a className="title__text">{title}</a>
        </Link>
        <div className="title__date">{moment(createdAt).fromNow()}</div>
      </div>
      <div className="item__description">
        {removeMd(markdown.slice(0, 190))}...
      </div>
    </div>
  )
}

export default Item