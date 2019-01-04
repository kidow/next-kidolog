import './index.scss'
import { Item } from 'components/molecules'

const PostList = ({ posts, loading }) => {
  const postList = posts.map(item => (
    <Item
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      thumbnail={item.thumbnail}
      id={item._id}
      loading={loading}
    />
  ))
  return <div className="post-list">{postList}</div>
}

export default PostList
