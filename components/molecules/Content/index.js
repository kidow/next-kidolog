import './index.scss'
import { Button, Tag } from 'components/atoms'
import moment from 'moment'
import 'moment/locale/ko'
import Marked from '../Marked'
// import removeMd from 'remove-markdown'

const Content = ({
  title,
  markdown,
  createdAt,
  tags,
  logged,
  onUpdate,
  onRemove
}) => {
  const tagsList = Array.isArray(tags)
    ? tags.map(tag => (
        <Tag key={tag} to={`/tag/${tag}`}>
          {tag}
        </Tag>
      ))
    : []
  return (
    <div className="content__title">
      {/* {markdown && (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={removeMd(markdown).slice(0, 190)} />
        </Helmet>
      )} */}
      {logged && (
        <div className="content__buttons">
          <Button onClick={onUpdate}>수정</Button>
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
