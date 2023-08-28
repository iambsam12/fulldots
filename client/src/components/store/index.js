import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer from "./reducer/AuthReducer";
import { NewsReducer } from "./reducer/NewsReducer";

const rootReducers = combineReducers({
  AuthReducer,
  NewsReducer,
});
const middlewares = [thunkMiddleware];
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
