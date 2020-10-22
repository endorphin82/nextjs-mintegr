import {ActionsTypes} from "../store"
import {IS_OPEN_HAMBURGER} from "../actions/types";

export type initialState = typeof initialState
const initialState = {
  isOpen: false
}

const hamburger = (state: initialState = initialState, action: ActionsTypes): initialState => {
  switch (action.type) {
    case IS_OPEN_HAMBURGER:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state
  }
}

export default hamburger
