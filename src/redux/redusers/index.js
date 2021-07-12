import {combineReducers} from "redux";
import {counterReducer} from "./counter";
import {todosReducer} from "./todos";

export const rootReduser = combineReducers({
    counterReducer,
    todosReducer
})