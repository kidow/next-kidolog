import './index.scss'
import { Item } from 'components/molecules'
import PropTypes from 'prop-types'

const List = ({ posts, pending, nextPending }) => {
  const postList = posts.map(item => (
    <Item
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      thumbnail={item.thumbnail}
      id={item._id}
      pending={pending}
    />
  ))
  return <div className="post-list">{postList}</div>
}

List.propTypes = {
  posts: PropTypes.array,
  pending: PropTypes.bool
}

export default List
