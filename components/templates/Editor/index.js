import styles from './index.scss'
import classNames from 'classnames/bind'
import Router from 'next/router'
import { Input, Button, Icon, IconButton } from 'components/atoms'

import { IoIosArrowDropleft, IoIosImage } from 'react-icons/io'
import { MdFileUpload } from 'react-icons/md'

import { Markdown, Preview } from 'components/molecules'

import { useEffect, useCallback, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  writePost,
  initialize,
  getPost,
  imageUpload,
  thumbnailUpload,
  changeInput
} from 'store/editor'
import { updatePost } from 'store/post'
import { check } from 'store/auth'

const cx = classNames.bind(styles)

const EditorTemplate = ({ post }) => {
  const [leftPercentage, setLeftPercentage] = useState(0.5)
  const { logged } = useSelector(state => state.auth)
  const { title, markdown, tags, thumbnail } = useSelector(
    state => state.editor
  )
  const dispatch = useDispatch()

  useEffect(_ => {
    dispatch(check())
    dispatch(initialize())
    if (post._id) dispatch(getPost(post))
  }, [])

  const onUploadClick = useCallback(() => {
    if (!logged) return alert('로그인이 필요합니다')
    const formData = new FormData()
    const upload = document.createElement('input')
    upload.type = 'file'
    upload.accept = 'image/*'
    upload.onchange = () => {
      if (!upload.files) return
      const file = upload.files[0]
      formData.append('img', file)
      dispatch(imageUpload(formData))
    }
    upload.click()
  })

  const onUploadThumbClick = useCallback(() => {
    if (!logged) return alert('로그인이 필요합니다')
    const formData = new FormData()
    const upload = document.createElement('input')
    upload.type = 'file'
    upload.accept = 'image/*'
    upload.onchange = () => {
      if (!upload.files) return
      const file = upload.files[0]
      formData.append('thumb', file)
      dispatch(thumbnailUpload(formData))
    }
    upload.click()
  })

  const onSubmit = useCallback(async () => {
    const payload = {
      title,
      markdown,
      tags: tags ? [...new Set(tags.split(','))] : [],
      thumbnail
    }
    try {
      if (!logged) return alert('로그인이 필요합니다')
      if (post._id) {
        await dispatch(updatePost({ id: post._id, ...payload }))
        return Router.push(`/post/${post._id}`)
      }
      const { data } = await dispatch(writePost(payload))
      Router.push(`/post/${data._id}`)
    } catch (e) {
      console.log(e)
    }
  })

  const onMouseMove = useCallback(e =>
    setLeftPercentage(e.clientX / window.innerWidth)
  )

  const onMouseUp = useCallback(() => {
    document.body.removeEventListener('mousemove', onMouseMove)
    window.removeEventListener('mouseup', onMouseUp)
  })

  const onSeparatorMouseDown = useCallback(() => {
    document.body.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
  })

  const onChangeInput = useCallback(e => {
    const { name, value } = e.target
    dispatch(changeInput({ name, value }))
  })

  return (
    <div className="editor-template">
      <div className="editor__header">
        <div className="header__left">
          <Icon
            Name={IoIosArrowDropleft}
            size={35}
            className="back-icon"
            onClick={() => Router.back()}
          />
          <div className="header__input">
            <Input
              name="title"
              value={title}
              onChange={onChangeInput}
              placeholder="제목을 입력해주세요."
              autoFocus
              theme="editor"
            />
          </div>
        </div>
        <div className="header__right">
          <IconButton
            IconName={MdFileUpload}
            size={25}
            onClick={onUploadThumbClick}
          >
            썸네일
          </IconButton>
          <div className="spacer" />
          <IconButton IconName={IoIosImage} size={25} onClick={onUploadClick}>
            업로드
          </IconButton>
          <div className="spacer" />
          <Button onClick={onSubmit}>{post._id ? '수정' : '작성'}하기</Button>
        </div>
      </div>
      <div className="editor__content">
        <div
          style={{ flex: leftPercentage }}
          className={cx('content__flex', 'display')}
        >
          <Markdown />
        </div>
        <div
          style={{ flex: 1 - leftPercentage }}
          className={cx('content__flex', 'none')}
        >
          <Preview />
        </div>
        <div
          className="content__separator"
          style={{ left: `${leftPercentage * 100}%` }}
          onMouseDown={onSeparatorMouseDown}
        />
      </div>
    </div>
  )
}

export default EditorTemplate
