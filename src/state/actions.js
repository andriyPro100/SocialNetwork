import {ADD_POST, SEND_MESSAGE, UPDATE_TEXT, UPDATE_TEXT_MESSAGE} from "./state";

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

export const sendMessageActionCreator = () => {
    return (
        {type: SEND_MESSAGE}
    )
}
export const updateTextMessageActionCreator = (value) => {
    return (
        {type: UPDATE_TEXT_MESSAGE, text: value}
    )
}
