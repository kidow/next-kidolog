import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/admin'

const CHANGE_PASSWORD = 'admin/CHANGE_PASSWORD'
const LOGIN = 'admin/LOGIN'
const CHECK = 'admin/CHECK'
const TEMP_LOGIN = 'admin/TEMP_LOGIN'

export const changePassword = createAction(CHANGE_PASSWORD)
export const login = createAction(LOGIN, api.login)
export const check = createAction(CHECK, api.check)
export const tempLogin = createAction(TEMP_LOGIN)

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
      }),
    [TEMP_LOGIN]: (state, action) =>
      produce(state, draft => {
        draft.logged = true
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