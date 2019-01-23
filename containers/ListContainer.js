import { List } from 'components/organisms'

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

    const { scrollY } = window
    const { scrollHeight, clientHeight } = document.body

    if (scrollHeight - clientHeight - 200 < scrollY) {
      this.getNext()
    }
  }
  render() {
    const { posts, pending } = this.props
    return <List posts={posts} pending={pending} />
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
