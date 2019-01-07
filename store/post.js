import { createAction, handleActions } from 'redux-actions'
import { Map } from 'immutable'
import * as api from 'api/post'

const UPDATE_POST = 'post/UPDATE_POST'
const REMOVE_POST = 'post/REMOVE_POST'

export const updatePost = createAction(UPDATE_POST, api.updatePost)
export const removePost = createAction(REMOVE_POST, api.removePost)

export default handleActions({}, Map({}))
