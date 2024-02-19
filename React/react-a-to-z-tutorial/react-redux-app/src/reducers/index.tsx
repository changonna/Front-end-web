import { combineReducers } from "redux";
import todos from "./todos";
import counter from './counter';
import posts from './posts';

const rootReducer = combineReducers({
  todos,
  counter,
  posts
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;