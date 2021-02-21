export const SEND_MESSAGE = "Dialog/SEND_MESSAGE"
export const UPDATE_TEXT_MESSAGE = "Dialog/UPDATE_TEXT_MESSAGE"

let initial_state = {
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
}

export const dialogReducer = (state=initial_state, action) => {

    switch (action.type){
        case UPDATE_TEXT_MESSAGE:
            return {
                ...state,
                newMessageText: action.text
            }
        case SEND_MESSAGE:
            let m = state.messages[0].message
            m.push(state.newMessageText)
            return {
                ...state,
                messages: [...state.messages, {id: 1, m}],
                newMessageText: "",
            }
        default:
            return state
    }
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
