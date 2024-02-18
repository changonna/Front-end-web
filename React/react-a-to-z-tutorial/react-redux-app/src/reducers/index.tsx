import { combineReducers } from "redux";
import todos from "./todos"
import counter from './counter'

const rootReducer = combineReducers({
  todos,
  counter
})

export default rootReducer;

// Root Reducer에 RootState 타입 생성
export type RootState = ReturnType<typeof rootReducer>;