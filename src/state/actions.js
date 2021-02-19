import {ADD_POST, UPDATE_TEXT} from "./state";

export const updatePostActionCreator = (value) => {
    return (
        {type: UPDATE_TEXT, text: value}
    )
}
export const addPostActionCreator = () => {
    return (
        {type: ADD_POST}
    )
}
