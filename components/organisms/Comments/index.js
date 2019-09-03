import './index.scss'
import { Textarea, Button } from 'components/atoms'
import moment from 'moment'
import 'moment/locale/ko'
import { useCallback } from 'react'
import { changeInput } from 'store/comment'
import { useSelector, useDispatch } from 'react-redux'

const Comments = _ => {
  const { content, comments } = useSelector(state => state.comment)
  const dispatch = useDispatch()

  const onChange = useCallback(e => {
    dispatch(changeInput(e.target))
  })

  const commentList = comments.map(comment => (
    <div className="comment__item" key={comment._id}>
      <div className="comment__head">
        <span>
          <img src={comment.thumbnail} alt="thumb" />
        </span>
      </div>
      <div className="comment__body"></div>
    </div>
  ))
  return (
    <div className="comments__container">
      <h3>{commentList.length}개의 댓글</h3>
      <Textarea
        onChange={onChange}
        value={content}
        name="content"
        placeholder="준비 중입니다."
        rows="1"
      />
      <div className="comment__button">
        <Button>작성</Button>
      </div>
      <div className="comment__list">
        <div className="comment__item">
          <div className="comment__head">
            <span>
              <img src="" alt="" />
            </span>
          </div>
          <div className="comment__body"></div>
        </div>
      </div>
    </div>
  )
}

export default Comments
