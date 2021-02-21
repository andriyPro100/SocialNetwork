import {combineReducers} from "redux";
import {wallReducer} from "./wall_reducer";
import {dialogReducer} from "./dialog_reducer";

export const reducers = combineReducers({
    wall: wallReducer,
    dialog: dialogReducer
})
