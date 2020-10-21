import {combineReducers} from 'redux'
import hamburger from './hamburger'
import client_height from "./client_height";

export const rootReducer = combineReducers({
  hamburger,
  client_height
})

export type RootState = ReturnType<typeof rootReducer>
