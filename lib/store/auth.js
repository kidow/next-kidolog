import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/auth'

const INITIALIZE = 'auth/INITIALIZE'
const CHANGE_INPUT = 'auth/CHANGE_INPUT'
const SET_ERROR = 'auth/SET_ERROR'

const CHECK_EMAIL_EXISTS = 'auth/CHECK_EMAIL_EXISTS'
const CHECK_NICKNAME_EXISTS = 'auth/CHECK_NICKNAME_EXISTS'

const LOCAL_REGISTER = 'auth/LOCAL_REGISTER'
const LOCAL_LOGIN = 'auth/LOCAL_LOGIN'

const SOCIAL_REGISTER = 'auth/SOCIAL_REGISTER'
const SOCIAL_LOGIN = 'auth/SOCIAL_LOGIN'

const CHECK = 'auth/CHECK'
const LOGOUT = 'auth/LOGOUT'

export const initialize = createAction(INITIALIZE)
export const changeInput = createAction(CHANGE_INPUT)
export const setError = createAction(SET_ERROR)

export const checkEmailExists = createAction(
  CHECK_EMAIL_EXISTS,
  api.checkEmailExists
)
export const checkNicknameExists = createAction(
  CHECK_NICKNAME_EXISTS,
  api.checkNicknameExists
)

export const localRegister = createAction(LOCAL_REGISTER, api.localRegister)
export const loaclLogin = createAction(LOCAL_LOGIN, api.localLogin)

export const socialRegister = createAction(SOCIAL_REGISTER, api.socialRegister)
export const socialLogin = createAction(SOCIAL_LOGIN, api.socialLogin)

export const check = createAction(CHECK, api.check)
export const logout = createAction(LOGOUT, api.logout)

const initialState = {
  register: {
    form: {
      email: '',
      password: '',
      nickname: ''
    },
    exists: {
      email: false,
      password: false,
      nickname: false
    },
    error: null
  },
  login: {
    form: {
      email: '',
      password: ''
    },
    error: null
  },
  result: {}
}

const reducer = handleActions(
  {
    [INITIALIZE]: (state, action) =>
      produce(state, draft => {
        draft[action.payload] = initialState[action.payload]
      }),
    [CHANGE_INPUT]: (state, action) =>
      produce(state, draft => {
        const { form, name, value } = action.payload
        draft[(form, 'form', name)] = value
      }),
    [SET_ERROR]: (state, action) =>
      produce(state, draft => {
        const { form, message } = action.payload
        draft[form].error = message
      })
  },
  initialState
)

export default applyPenders(reducer, [
  {
    type: CHECK_EMAIL_EXISTS,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { exists } = action.payload.data
        draft.register.exists.email = exists
      })
  },
  {
    type: CHECK_NICKNAME_EXISTS,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { exists } = action.payload.data
        draft.register.exists.nickname = exists
      })
  },
  {
    type: LOCAL_REGISTER,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.result = action.payload.data
      })
  },
  {
    type: LOCAL_LOGIN,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.result = action.payload.data
      })
  },
  {
    type: SOCIAL_REGISTER,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.result = action.payload.data
      })
  },
  {
    type: SOCIAL_LOGIN,
    onSuccess: (state, action) =>
      produce(state, draft => {
        draft.result = action.payload.data
      })
  }
])
