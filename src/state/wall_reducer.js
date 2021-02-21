export const ADD_POST = "User/ADD_POST"
export const UPDATE_TEXT = "User/UPDATE_TEXT"

let initial_state = {
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

export const wallReducer = (state=initial_state, action) => {
    switch (action.type){
        case ADD_POST:
            const text = state.newPostText
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts,
                    {id: state.posts.length+1,
                    message: text}]
            }

        case UPDATE_TEXT:
            return {
                ...state,
                newPostText: action.text
            }
        default:
            return state
    }

}

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

