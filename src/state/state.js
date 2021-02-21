import {wallReducer} from "./wall_reducer";
import {dialogReducer} from "./dialog_reducer";

export const ADD_POST = "User/ADD_POST"
export const UPDATE_TEXT = "User/UPDATE_TEXT"
export const SEND_MESSAGE = "Dialog/SEND_MESSAGE"
export const UPDATE_TEXT_MESSAGE = "Dialog/UPDATE_TEXT_MESSAGE"

let store = {

    _state: {
        dialogState:{
            friends: [
                {
                    id: 1,
                    name: "Sasha",
                },{
                    id: 2,
                    name: "Tom",
                },{
                    id: 3,
                    name: "Victor",
                },{
                    id: 4,
                    name: "Svitlana",
                },
            ],
            messages: [
                {
                    id:1,
                    message: [
                        "Hi!",
                        "Hello!",
                        "I miss you",
                        "So do I"
                    ],
                },
                {
                    id:2,
                    message: [
                        "Hi, bro",
                        "Hello!",
                        "What are you doing?",
                        "Nothing, bro"
                    ]
                },
                {
                    id:3,
                    message: [
                        "Hi!",
                        "Hello!",
                        "I miss you",
                        "So do I"
                    ],
                },
                {
                    id:4,
                    message: [
                        "Hi, bro",
                        "Hello!",
                        "What are you doing?",
                        "Nothing, bro"
                    ]
                }
            ],
            newMessageText: ""
        },

        userState: {
            newPostText: "",

            posts: [
                {
                    id: 1,
                    message: "Hi, how are you?"
                },{
                    id: 2,
                    message: "Thank you"
                },{
                    id: 3,
                    message: "Wow! I am an amazing pianist!"
                },
            ]
        }
    },
    getState(){
        return this._state
    },

    subscribe(observer){
        this._callSubscriber = observer
    },
    _callSubscriber(){
        console.log("state changed")
    },

    dispatch(action){
        this._state.dialogState = dialogReducer(this._state.dialogState, action)
        this._state.userState = wallReducer(this._state.userState, action)
        this._callSubscriber(this._state)
    }
}
export default store
