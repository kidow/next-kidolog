import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import * as api from 'api/comment'
import { applyPenders } from 'redux-pender'

const INITIALIZE = 'comment/INITIALIZE'
const CHANGE_INPUT = 'comment/CHANGE_INPUT'
const WRITE_COMMENT = 'comment/WRITE_COMMENT'
const GET_COMMENTS = 'comment/GET_COMMENTS'
const UPDATE_COMMENT = 'comment/UPDATE_COMMENT'
const REMOVE_COMMENT = 'comment/REMOVE_COMMENT'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const writeComment = createAction(WRITE_COMMENT, api.writeComment)
export const getComments = createAction(GET_COMMENTS, api.getComments)
export const updateComment = createAction(UPDATE_COMMENT, api.updateComment)
export const removeComment = createAction(REMOVE_COMMENT, api.removeComment)

const initialState = {
  content: '',
  comments: []
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
    type: WRITE_COMMENT,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const comment = action.payload.data
        draft.content = ''
        draft.comments.push(comment)
      })
  }
])
