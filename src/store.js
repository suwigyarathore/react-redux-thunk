import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todo";
import messageReducer from "./reducers/message";

export default createStore(
  combineReducers({ todo: todoReducer, message: messageReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
