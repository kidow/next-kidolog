import './index.scss'
import { Item } from 'components/molecules'

const PostList = ({ posts }) => {
  const postList = posts.map(item => (
    <Item
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      thumbnail={item.thumbnail}
      id={item._id}
    />
  ))
  return <div className="post-list">{postList}</div>
}

export default PostList
