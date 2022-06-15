import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import post from "./moduels/post";
import user from "./moduels/user";
import comment from "./moduels/comment";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({
  post,
  user,
  comment,
});

const store = createStore(rootReducer, enhancer);

export default store;
