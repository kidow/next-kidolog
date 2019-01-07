import './index.scss'
import { Button, Tag } from 'components/atoms'
import moment from 'moment'
import 'moment/locale/ko'
import Marked from '../Marked'
import { Link } from 'lib/next-routes'
import Head from 'next/head'
import removeMd from 'remove-markdown'

const Content = ({
  title,
  markdown,
  createdAt,
  tags,
  logged,
  id,
  onRemove
}) => {
  const tagsList = Array.isArray(tags)
    ? tags.map((tag, index) => (
        <Link key={index} route="tag" params={{ tag }}>
          <Tag key={index}>{tag}</Tag>
        </Link>
      ))
    : []
  return (
    <div className="content__container">
      {markdown && (
        <Head>
          <title>{title} | Kidow</title>
          <meta name="description" content={removeMd(markdown).slice(0, 190)} />
        </Head>
      )}
      <div className="content__title">{title}</div>
      {logged && (
        <div className="content__buttons">
          <Link route="editor" params={{ id: String(id) }}>
            <Button>수정</Button>
          </Link>
          <Button onClick={onRemove}>삭제</Button>
        </div>
      )}
      <div className="content__date">{moment(createdAt).format('lll')}</div>
      <div className="content__body">
        <Marked markdown={markdown} />
      </div>
      <div className="content__tags">{tagsList}</div>
    </div>
  )
}

export default Content
