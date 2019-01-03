import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import * as api from '../lib/api/editor'
import { pender } from 'redux-pender'

const INTIALIZE_EDITOR = 'editor/INITIALIZE_EDITOR'
const CHANGE_INPUT = 'editor/CHANGE_INPUT'
const WRITE_POST = 'editor/WRITE_POST'
const GET_POST = 'editor/GET_POST'
const IMAGE_UPLOAD = 'editor/IMAGE_UPLOAD'
const THUMBNAIL_UPLOAD = 'editor/THUMBNAIL_UPLOAD'

export const initializeEditor = createAction(INTIALIZE_EDITOR)
export const changeInput = createAction(CHANGE_INPUT)
export const writePost = createAction(WRITE_POST, api.writePost)
export const getPost = createAction(GET_POST, api.getPost)
export const imageUpload = createAction(IMAGE_UPLOAD, api.imageUpload)
export const thumbnailUpload = createAction(
  THUMBNAIL_UPLOAD,
  api.thumbnailUpload
)

const initialState = Map({
  title: '',
  markdown: '',
  tags: '',
  thumbnail: ''
})

export default handleActions(
  {
    [INTIALIZE_EDITOR]: (state, action) => initialState,
    [CHANGE_INPUT]: (state, action) => {
      const { name, value } = action.payload
      return state.set(name, value)
    },
    ...pender({
      type: GET_POST,
      onSuccess: (state, action) => {
        const { title, markdown, tags } = action.payload.data
        return state
          .set('title', title)
          .set('markdown', markdown)
          .set('tags', tags.join(', '))
      }
    }),
    ...pender({
      type: IMAGE_UPLOAD,
      onSuccess: (state, action) => {
        const { image } = action.payload.data
        return state.set('markdown', state.get('markdown') + image)
      }
    }),
    ...pender({
      type: THUMBNAIL_UPLOAD,
      onSuccess: (state, action) => {
        const { thumbnail } = action.payload.data
        return state.set('thumbnail', thumbnail)
      }
    })
  },
  initialState
)
