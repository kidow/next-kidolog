import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/user'

const SET_LOGGED_INFO = 'user/SET_LOGGED_INFO'
const SET_VALIDATED = 'user/SET_VALIDATED'
const LOGOUT = 'user/LOGOUT'
const CHECK_STATUS = 'user/CHECK_STATUS'

export const setLoggedInfo = createAction(SET_LOGGED_INFO)
export const setValidated = createAction(SET_VALIDATED)
export const logout = createAction(LOGOUT, api.logout)
export const checkStatus = createAction(CHECK_STATUS, api.checkStatus)

const initialState = {
  loggedInfo: {
    nickname: null,
    thumbnail: null
  },
  logged: false,
  validated: false
}

const reducer = handleActions(
  {
    [SET_LOGGED_INFO]: (state, action) =>
      produce(state, draft => {
        draft.loggedInfo = action.payload
        draft.logged = true
      }),
    [SET_VALIDATED]: (state, action) =>
      produce(state, draft => {
        draft.validated = action.payload
      })
  },
  initialState
)

export default applyPenders(reducer, [
  {
    type: CHECK_STATUS,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.loggedInfo = action.payload.data
        draft.validated = true
      }),
    onFailure: (state, action) => initialState
  }
])
