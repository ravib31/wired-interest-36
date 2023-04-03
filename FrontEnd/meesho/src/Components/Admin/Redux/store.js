import {applyMiddleware,combineReducers, legacy_createStore} from "redux";
import thunk from "redux-thunk"
import {reducer as AuthReducer} from "./AdminRedux/reducer";
import {reducer as UserReducer} from "./UserRedux/reducer";
let mainReducer = combineReducers({AuthReducer, UserReducer});

export const store = legacy_createStore(mainReducer, applyMiddleware(thunk));


// use combine reducer in main File
