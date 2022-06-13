import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import post from './module/post'

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares);

const rootReducer = combineReducers({
  post
});

const store = createStore(rootReducer, enhancer);

export default store;
