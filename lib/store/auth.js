import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/auth'

const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD'
const LOGIN = 'auth/LOGIN'
const CHECK = 'auth/CHECK'

export const changePassword = createAction(CHANGE_PASSWORD)
export const login = createAction(LOGIN, api.login)
export const check = createAction(CHECK, api.check)

const initialState = {
  password: '',
  logged: false
}

const reducer = handleActions(
  {
    [CHANGE_PASSWORD]: (state, action) =>
      produce(state, draft => {
        const { payload: value } = action
        draft.password = value
      })
  },
  initialState
)

export default applyPenders(reducer, [
  {
    type: LOGIN,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.logged = true
      })
  },
  {
    type: CHECK,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { logged } = action.payload.data
        draft.logged = logged
      })
  }
])
