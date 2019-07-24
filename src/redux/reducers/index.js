import { combineReducers } from 'redux'

import pathReducer from './path'

const allReducers = {
  activePath: pathReducer
}

const rootReducer = combineReducers(allReducers)

export default rootReducer