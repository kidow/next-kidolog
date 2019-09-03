import './index.scss'
import { Item } from 'components/molecules'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as listActions from 'store/list'

import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getList, nextList, showNextList } from 'store/list'

let prev = null

const List = ({ tag }) => {
  const { posts, next, nextPosts } = useSelector(state => state.list)
  const { pending } = useSelector(state => state.pender)
  const dispatch = useDispatch()

  const findList = useCallback(async () => {
    try {
      await dispatch(getList({ tag }))
      if (next) dispatch(nextList(next))
    } catch (err) {
      console.log(err)
    }
  })

  const onScroll = useCallback(() => {
    if (nextPosts.size === 0) return

    const { pageYOffset } = window
    const { scrollHeight, clientHeight } = document.body

    if (scrollHeight - clientHeight <= pageYOffset + 10) getNext()
  }, [posts.length])

  const getNext = useCallback(async () => {
    dispatch(showNextList())
    if (next === prev || !next) return
    prev = next
    try {
      await dispatch(nextList(next))
    } catch (err) {
      console.log(err)
    }
  })

  useEffect(_ => {
    findList()
    window.addEventListener('scroll', onScroll)
    return _ => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const postList = posts.map(post => (
    <Item
      key={post._id}
      title={post.title}
      markdown={post.markdown}
      createdAt={post.createdAt}
      thumbnail={post.thumbnail}
      id={post._id}
      pending={pending['list/GET_LIST']}
    />
  ))
  return <div className="post-list">{postList}</div>
}

// class ListContainer extends React.Component {
//   prev = null

//   componentDidMount() {
//     this.getList()
//     window.addEventListener('scroll', this.onScroll)
//   }

//   componentWillUnmount() {
//     window.removeEventListener('scroll', this.onScroll)
//   }

//   getList = async () => {
//     const { ListActions, tag } = this.props
//     try {
//       await ListActions.getList({ tag })
//       const { next } = this.props
//       if (next) ListActions.nextList(next)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   getNext = async () => {
//     const { ListActions, next } = this.props
//     ListActions.showNextList()
//     if (next === this.prev || !next) return
//     this.prev = next
//     try {
//       await ListActions.nextList(next)
//     } catch (e) {
//       console.log(e)
//     }
//   }

//   onScroll = () => {
//     const { nextPosts } = this.props
//     if (nextPosts.size === 0) return

//     const { pageYOffset } = window
//     const { scrollHeight, clientHeight } = document.body

//     if (scrollHeight - clientHeight <= pageYOffset + 10) this.getNext()
//   }

//   render() {
//     const { posts, pending } = this.props
//     const postList = posts.map(item => (
//       <Item
//         key={item._id}
//         title={item.title}
//         markdown={item.markdown}
//         createdAt={item.createdAt}
//         thumbnail={item.thumbnail}
//         id={item._id}
//         pending={pending}
//       />
//     ))
//     return <div className="post-list">{postList}</div>
//   }
// }

export default List
