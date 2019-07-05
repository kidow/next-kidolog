import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import * as api from 'api/editor'
import { applyPenders } from 'redux-pender'

const INITIALIZE = 'editor/INITIALIZE'
const CHANGE_INPUT = 'editor/CHANGE_INPUT'
const WRITE_POST = 'editor/WRITE_POST'
const GET_POST = 'editor/GET_POST'
const IMAGE_UPLOAD = 'editor/IMAGE_UPLOAD'
const THUMBNAIL_UPLOAD = 'editor/THUMBNAIL_UPLOAD'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const writePost = createAction(WRITE_POST, api.writePost)
export const getPost = createAction(GET_POST, api.getPost)
export const imageUpload = createAction(IMAGE_UPLOAD, api.imageUpload)
export const thumbnailUpload = createAction(
  THUMBNAIL_UPLOAD,
  api.thumbnailUpload
)

const initialState = {
  title: '',
  markdown: '',
  tags: '',
  thumbnail: '',
  postId: null
}

const reducer = handleActions(
  {
    [INITIALIZE]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { name, value } = action.payload
        draft[name] = value
      })
  },
  initialState
)

export default applyPenders(reducer, [
  {
    type: WRITE_POST,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { _id } = action.payload.data
        console.log('_id :', _id)
        draft.postId = _id
      })
  },
  {
    type: GET_POST,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { title, markdown, tags } = action.payload.data
        draft.title = title
        draft.markdown = markdown
        draft.tags = tags.join(', ')
      })
  },
  {
    type: IMAGE_UPLOAD,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { image } = action.payload.data
        draft.markdown = draft.markdown + image
      })
  },
  {
    type: THUMBNAIL_UPLOAD,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { thumbnail } = action.payload.data
        draft.thumbnail = thumbnail
      })
  }
])
