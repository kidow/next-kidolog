import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/auth'

const INITIALIZE = 'auth/INITIALIZE'
const CHANGE_INPUT = 'auth/CHANGE_INPUT'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)

const initialState = {
  email: '',
  nickname: '',
  password: ''
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

export default applyPenders(reducer, [])
