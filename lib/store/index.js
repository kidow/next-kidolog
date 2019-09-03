import editor from './editor'
import list from './list'
import post from './post'
import auth from './auth'
import comment from './comment'

import { combineReducers } from 'redux'
import { penderReducer as pender } from 'redux-pender'

export default combineReducers({
  editor,
  list,
  post,
  auth,
  comment,
  pender
})
