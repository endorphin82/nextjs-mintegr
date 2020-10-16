import { createStore} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction"

import * as actions from "./actions"
import {rootReducer} from './reducer'

const composeEnhancers = composeWithDevTools();

// function initStore(preloadedState = {}) {
//   return createStore(
//     rootReducer,
//     preloadedState,
//     composeWithDevTools(applyMiddleware())
//   )
// }


type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;
export type ActionsTypes = ReturnType<InferValueTypes<typeof actions>>;

export const store = createStore(rootReducer, {}, composeEnhancers);