import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import { reducer } from "./AdminRedux/reducer";
//let mainReducer = combineReducers({AdminReducer});

export const store = legacy_createStore(reducer,applyMiddleware(thunk));


// use combine reducer in main File