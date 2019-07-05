import './index.scss'
import { Item } from 'components/molecules'
import PropTypes from 'prop-types'
import { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getList, nextList, showNextList } from 'store/list'

const List = ({ tag }) => {
  const { posts, next, nextPosts } = useSelector(state => state.list)
  const { pending } = useSelector(state => state.pender)
  const dispatch = useDispatch()

  let prev = null

  const getPosts = useCallback(async () => {
    try {
      await dispatch(getList({ tag }))
      // next를 읽지 못하고 있음
      if (next) dispatch(nextList(next))
    } catch (e) {
      console.log(e)
    }
  })

  const getNext = useCallback(async () => {
    dispatch(showNextList())
    if (next === prev || !next) return
    prev = next
    try {
      await dispatch(nextList(next))
    } catch (e) {
      console.log(e)
    }
  })

  const onScroll = useCallback(() => {
    if (!nextPosts.length) return

    const { scrollY } = window
    const { scrollHeight, clientHeight } = document.body

    if (scrollHeight - clientHeight - 200 <= scrollY) getNext()
  })

  useEffect(_ => {
    getPosts()
    window.addEventListener('scroll', onScroll)
  }, [])

  useEffect(
    _ => _ => {
      window.removeEventListener('scroll', onScroll)
    },
    []
  )

  const postList = posts.map(item => (
    <Item
      key={item._id}
      title={item.title}
      markdown={item.markdown}
      createdAt={item.createdAt}
      thumbnail={item.thumbnail}
      id={item._id}
      pending={pending['list/GET_LIST']}
    />
  ))
  return <div className="post-list">{postList}</div>
}

List.propTypes = {
  tag: PropTypes.string
}

export default List
