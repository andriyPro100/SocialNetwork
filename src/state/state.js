export const ADD_POST = "User/ADD_POST"
export const UPDATE_TEXT = "User/UPDATE_TEXT"
export const SEND_MESSAGE = "Dialog/SEND_MESSAGE"
export const UPDATE_TEXT_MESSAGE = "Dialog/UPDATE_TEXT_MESSAGE"

let store = {

    _state: {
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
        newPostText: "",
        newMessageText: "",
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
        if (action.type === ADD_POST){
            let newPost = {
                id: this._state.posts.length+1,
                message: this._state.newPostText
            }
            this._state.posts.push(newPost)
            this._state.newPostText = ""
        }else if (action.type === UPDATE_TEXT){
            this._state.newPostText = action.text
        }else if (action.type === UPDATE_TEXT_MESSAGE){
            this._state.newMessageText = action.text
        }else if (action.type === SEND_MESSAGE){
            this._state.messages[0].message.push(this._state.newMessageText)
            this._state.newMessageText = ""
        }

        this._callSubscriber(this._state)
    }
}
export default store
