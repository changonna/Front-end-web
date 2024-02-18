import { combineReducers } from "redux";
import todos from "./todos"
import counter from './counter'

const rootReducer = combineReducers({
  todos,
  counter
})

export default rootReducer;