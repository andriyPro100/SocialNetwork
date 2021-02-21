import {createStore} from "redux";
import {reducers} from "./root_reducer";

export const store = createStore(reducers)
