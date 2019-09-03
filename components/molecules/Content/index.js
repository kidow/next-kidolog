import './index.scss'
import { Button, Tag } from 'components/atoms'
import { Marked } from 'components/molecules'

import { Link } from 'lib/next-routes'
import Router from 'next/router'

import moment from 'moment'
import 'moment/locale/ko'

import PropTypes from 'prop-types'

import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { check } from 'store/auth'
import { removePost } from 'store/post'

const Content = ({ post }) => {
  const { title, markdown, createdAt, tags, _id } = post
  const { logged } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const onRemove = useCallback(async () => {
    try {
      await dispatch(removePost(_id))
      Router.push('/')
    } catch (e) {
      console.log(e)
    }
  })

  useEffect(_ => {
    dispatch(check())
  }, [])

  const tagsList = Array.isArray(tags)
    ? tags.map((tag, index) => (
        <Link key={index} route="tag" params={{ tag }}>
          <Tag key={index}>{tag}</Tag>
        </Link>
      ))
    : []
  return (
    <div className="content__container">
      <div className="content__title">{title}</div>
      {logged && (
        <div className="content__buttons">
          <Link route="editor" params={{ id: String(_id) }}>
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

Content.propTypes = {
  post: PropTypes.object
}

export default Content
