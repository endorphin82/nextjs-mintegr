import {ActionsTypes} from "../store"
import {CLIENT_HEIGHT, IS_OPEN_HAMBURGER} from "../actions/types";

export type initialState = typeof initialState
const initialState = {
  clientHeight: 0
}

export default (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case CLIENT_HEIGHT:
      return {
        ...state,
        clientHeight: action.payload
      }
    default:
      return state
  }
}