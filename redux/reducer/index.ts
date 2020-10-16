import {combineReducers} from 'redux'
import hamburger from './hamburger'

export const rootReducer = combineReducers({
  hamburger
})

export type RootState = ReturnType<typeof rootReducer>
