import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import post from './moduels/post'
import user from "./moduels/user";

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);


const rootReducer = combineReducers({
  post,
  user
});

const store = createStore(rootReducer, enhancer);

export default store;
