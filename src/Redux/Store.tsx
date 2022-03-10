import { createStore, applyMiddleware } from "redux";
import { reducer } from "./Reducer/index"
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware),
    // other store enhancers if any
  ));
