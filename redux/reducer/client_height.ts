import {ActionsTypes} from "../store"
import {CLIENT_HEIGHT} from "../actions/types";

export type initialState = typeof initialState
const initialState = {
  clientHeight: 0
}

const client_height =  (state: initialState = initialState, action: ActionsTypes): initialState => {
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

export default client_height;