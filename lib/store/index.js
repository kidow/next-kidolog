import editor from './editor'
import list from './list'
import post from './post'
import auth from './auth'
import admin from './admin'

import { combineReducers } from 'redux'
import { penderReducer as pender } from 'redux-pender'

export default combineReducers({
  editor,
  list,
  post,
  admin,
  auth,
  pender
})
