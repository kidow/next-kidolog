import './index.scss'
import { Item } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from 'store/list'

class ListContainer extends React.Component {
  prev = null

  componentDidMount() {
    this.getList()
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  }

  getList = async () => {
    const { ListActions, tag } = this.props
    try {
      await ListActions.getList({ tag })
      const { next } = this.props
      if (next) ListActions.nextList(next)
    } catch (e) {
      console.log(e)
    }
  }

  getNext = async () => {
    const { ListActions, next } = this.props
    ListActions.showNextList()
    if (next === this.prev || !next) return
    this.prev = next
    try {
      await ListActions.nextList(next)
    } catch (e) {
      console.log(e)
    }
  }

  onScroll = () => {
    const { nextPosts } = this.props
    if (nextPosts.size === 0) return

    const { pageYOffset } = window
    const { scrollHeight, clientHeight } = document.body

    if (scrollHeight - clientHeight <= pageYOffset + 10) this.getNext()
  }

  render() {
    const { posts, pending } = this.props
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
}

export default connect(
  ({ list, pender }) => ({
    posts: list.posts,
    next: list.next,
    nextPosts: list.nextPosts,
    pending: pender.pending['list/GET_LIST']
  }),
  dispatch => ({
    ListActions: bindActionCreators(listActions, dispatch)
  })
)(ListContainer)
