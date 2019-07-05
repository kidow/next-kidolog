import { createAction, handleActions } from 'redux-actions'
import produce from 'immer'
import { applyPenders } from 'redux-pender'
import * as api from 'api/list'

const GET_LIST = 'list/GET_LIST'
const NEXT_LIST = 'list/NEXT_LIST'
const SHOW_NEXT_LIST = 'list/SHOW_NEXT_LIST'
const CHANGE_SEARCH = 'list/CHANGE_SEARCH'

export const getList = createAction(GET_LIST, api.getList)
export const nextList = createAction(NEXT_LIST, api.nextList)
export const showNextList = createAction(SHOW_NEXT_LIST)
export const changeSearch = createAction(CHANGE_SEARCH)

const initialState = {
  next: '',
  posts: [],
  nextPosts: [],
  search: ''
}

const reducer = handleActions(
  {
    [SHOW_NEXT_LIST]: (state, action) =>
      produce(state, draft => {
        const nextPosts = draft.nextPosts
        draft.posts = draft.posts.concat(nextPosts)
        draft.nextPosts = []
      }),
    [CHANGE_SEARCH]: (state, action) =>
      produce(state, draft => {
        const { payload: value } = action
        draft.search = value
      })
  },
  initialState
)

export default applyPenders(reducer, [
  {
    type: GET_LIST,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { next, posts } = action.payload.data
        console.log(action.payload.data)
        draft.next = next
        draft.posts = posts
        draft.search = ''
      })
  },
  {
    type: NEXT_LIST,
    onSuccess: (state, action) =>
      produce(state, draft => {
        const { next, posts } = action.payload.data
        draft.next = next
        draft.nextPosts = posts
      })
  }
])
